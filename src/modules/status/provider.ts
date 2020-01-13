import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class StatusProvider extends ErgastDataSource {
  // MARK: api calls

  public async getDriverStatus(args: {
    year: number;
    round: number;
    driverId: string;
  }) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = await this.get(
      `${args.year}/${args.round}/drivers/${args.driverId}/status.json`,
      undefined,
      cacheOptions
    );

    return this.parseStatusTable(result)[0];
  }

  // MARK: result parsing

  private parseStatusTable = (result: any) => result.StatusTable?.Status || [];
}
