import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryScheduleArgs } from '../generated/graphql';

export class ScheduleProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  // MARK: api calls

  public async getSchedule(args: QueryScheduleArgs) {
    const result = await this.get(`${args.year}.json`);
    return this.parseRaceTable(result);
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) => result.MRData.RaceTable.Races;
}
