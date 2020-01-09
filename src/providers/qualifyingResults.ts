import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryQualifyingResultsArgs } from '../generated/graphql';

export class QualifyingResultsProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  // MARK: api calls
  public async getQualifyingResults(args: QueryQualifyingResultsArgs) {
    const result = await this.get(`${args.year}/${args.round}/qualifying.json`);
    return this.parseRaceTable(result);
  }
  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable.Races[0].QualifyingResults;
}
