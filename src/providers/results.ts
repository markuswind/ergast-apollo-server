import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryResultsArgs } from '../generated/graphql';

export class ResultsProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  // MARK: api calls

  public async getResults(args: QueryResultsArgs) {
    const result = await this.get(`${args.year}/${args.round}/results.json`);
    return this.parseRaceTable(result);
  }

  public async getConstructorResult(args: {
    year: number;
    round: number;
    constructorId: string;
  }) {
    const result = await this.get(
      `/constructors/${args.constructorId}/${args.year}/${args.round}/results.json`
    );

    return this.parseRaceTable(result)[0];
  }

  public async getDriverResult(args: {
    year: number;
    round: number;
    driverId: string;
  }) {
    const result = await this.get(
      `drivers/${args.driverId}/${args.year}/${args.round}/results.json`
    );

    return this.parseRaceTable(result)[0];
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable.Races[0].Results;
}
