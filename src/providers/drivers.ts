import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryDriverArgs, QueryDriversArgs } from '../generated/graphql';

export class DriversProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  public async getDriver(args: QueryDriverArgs) {
    const result = await this.get(`drivers/${args.driverId}.json`);
    const driverTable = this.parseDriverTable(result);

    return driverTable[0];
  }

  public async getDrivers(args: QueryDriversArgs) {
    const result = await this.get(`${args.year}/drivers.json`);
    return this.parseDriverTable(result);
  }

  private parseDriverTable = (result: any) => result.MRData.DriverTable.Drivers;
}
