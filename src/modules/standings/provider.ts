import {
  QueryConstructorStandingsArgs,
  QueryDriverStandingsArgs
} from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class StandingsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getDriverStandings(args: QueryConstructorStandingsArgs) {
    const result = await this.get(`${args.year}/driverStandings.json`);
    return this.parseDriverStandingTable(result);
  }

  public async getConstructorStandings(args: QueryDriverStandingsArgs) {
    const result = await this.get(`${args.year}/driverStandings.json`);
    return this.parseDriverStandingTable(result);
  }

  public async getConstructorStanding(args: {
    constructorId: string;
    year: number;
  }) {
    const result = await this.get(
      `${args.year}/constructors/${args.constructorId}/constructorStandings.json`
    );

    return this.parseConstructorStandingTable(result)[0];
  }

  public async getDriverStanding(args: { driverId: string; year: number }) {
    const result = await this.get(
      `${args.year}/drivers/${args.driverId}/driverStandings.json`
    );

    return this.parseDriverStandingTable(result)[0];
  }

  // MARK: result parsing

  private parseConstructorStandingTable = (result: any) =>
    result.MRData.StandingsTable?.StandingsLists[0]?.ConstructorStandings || [];

  private parseDriverStandingTable = (result: any) =>
    result.MRData.StandingsTable?.StandingsLists[0]?.DriverStandings || [];
}
