import { QueryDriverArgs, QueryDriversArgs } from '../generated/graphql';
import { RestDataSource } from '../utils/RestDataSource';

export class DriversProvider extends RestDataSource {
  // MARK: api calls

  public async getDriver(args: QueryDriverArgs) {
    const result = await this.get(`drivers/${args.driverId}.json`);
    const driverTable = this.parseDriverTable(result);

    return driverTable[0];
  }

  public async getDrivers(args: QueryDriversArgs) {
    const result = await this.get(`${args.year}/drivers.json`);
    return this.parseDriverTable(result);
  }

  // MARK: result parsing

  private parseDriverTable = (result: any) => result.MRData.DriverTable.Drivers;
}
