import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryPitstopsArgs } from '../generated/graphql';

export class PitstopsProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  // MARK: api calls

  public async getPitstops(args: QueryPitstopsArgs) {
    const result = await this.get(`${args.year}/${args.round}/pitstops.json`);
    return this.parseRaceTable(result);
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable.Races[0].PitStops;
}
