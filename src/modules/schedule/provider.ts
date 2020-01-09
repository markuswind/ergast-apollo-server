import { QueryScheduleArgs } from '../../generated/graphql';
import { RestDataSource } from '../../utils/RestDataSource';

export class ScheduleProvider extends RestDataSource {
  // MARK: api calls

  public async getSchedule(args: QueryScheduleArgs) {
    const result = await this.get(`${args.year}.json`);
    return this.parseRaceTable(result);
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) => result.MRData.RaceTable.Races;
}
