import {
  QueryConstructorsArgs,
  QueryGetConstructorArgs
} from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

import { constructorEnrichments } from './enrichments';

export class ConstructorsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getConstructor(args: QueryGetConstructorArgs) {
    const result = await this.get(`constructors/${args.constructorId}.json`);
    const constructorTable = this.parseConstructorTable(result);

    return constructorTable[0];
  }

  public async getDriverConstructor(args: { year: number; driverId: string }) {
    const result = await this.get(
      `${args.year}/drivers/${args.driverId}/constructors.json`
    );

    return this.parseConstructorTable(result)[0];
  }

  public async getConstructors(args: QueryConstructorsArgs) {
    const result = await this.get(`${args.year}/constructors.json`);
    return this.parseConstructorTable(result);
  }

  // MARK: result parsing

  private parseConstructorTable = (result: any) => {
    const constructors = result.MRData.ConstructorTable?.Constructors || [];

    return constructors.map(constructor => {
      const enrichmentData =
        constructorEnrichments[constructor.constructorId] || {};

      return {
        ...constructor,
        ...enrichmentData
      };
    });
  };
}
