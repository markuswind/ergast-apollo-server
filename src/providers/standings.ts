import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryStandingsArgs } from '../generated/graphql';

export class StandingsProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  // MARK: api calls

  public async getStandings(args: QueryStandingsArgs) {
    const result = await this.get(`${args.year}/driverStandings.json`);
    return this.parseStandingTable(result);
  }

  public async getDriverStandings(args: { driverId: string; year: number }) {
    const result = await this.get(
      `drivers/${args.driverId}/${args.year}/driverStandings.json`
    );

    return this.parseStandingTable(result);
  }

  // MARK: result parsing

  private parseStandingTable = (result: any) =>
    result.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}
