import { QueryScheduleArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class ScheduleProvider extends ErgastDataSource {
  // MARK: api calls

  public async getCurrentSchedule() {
    const result = await this.get(`/current.json`);
    return this.parseRaceTable(result);
  }

  public async getSchedule(args: QueryScheduleArgs) {
    const result = await this.get(`${args.year}.json`);
    return this.parseRaceTable(result);
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable?.Races || [];
}
