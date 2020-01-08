import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import {
  QueryConstructorsArgs,
  QueryGetConstructorArgs
} from '../generated/graphql';

export class ConstructorsProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

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

  private parseConstructorTable = (result: any) =>
    result.MRData.ConstructorTable.Constructors;
}
