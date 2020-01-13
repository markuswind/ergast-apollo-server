import { QueryLapTimesArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class LapTimesProvider extends ErgastDataSource {
  // MARK: api calls

  public async getLapTimes(args: QueryLapTimesArgs) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = this.get(
      `/${args.year}/${args.round}/laps.json`,
      undefined,
      cacheOptions
    );

    return this.parseLapsTable(result);
  }

  public async getDriverLapTimes(args: {
    year: number;
    round: number;
    driverId: string;
  }) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = this.get(
      `/${args.year}/${args.round}/drivers/${args.driverId}/laps.json`,
      undefined,
      cacheOptions
    );

    return this.parseLapsTable(result);
  }

  // MARK: result parsing

  private parseLapsTable = (result: any) =>
    result.MRData.RaceTable?.Races[0]?.Laps || [];
}
