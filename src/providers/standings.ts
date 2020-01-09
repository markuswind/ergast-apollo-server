import { QueryStandingsArgs } from '../generated/graphql';
import { RestDataSource } from '../utils/RestDataSource';

export class StandingsProvider extends RestDataSource {
  // MARK: api calls

  public async getStandings(args: QueryStandingsArgs) {
    const result = await this.get(`${args.year}/driverStandings.json`);
    return this.parseStandingTable(result);
  }

  public async getDriverStandings(args: { driverId: string; year: number }) {
    const result = await this.get(
      `${args.year}/drivers/${args.driverId}/driverStandings.json`
    );

    return this.parseStandingTable(result);
  }

  // MARK: result parsing

  private parseStandingTable = (result: any) =>
    result.MRData.StandingsTable.StandingsLists[0].DriverStandings;
}
