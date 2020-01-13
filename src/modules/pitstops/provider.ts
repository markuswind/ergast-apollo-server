import { QueryPitstopsArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class PitstopsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getPitstops(args: QueryPitstopsArgs) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = await this.get(
      `${args.year}/${args.round}/pitstops.json`,
      undefined,
      cacheOptions
    );

    return this.parseRaceTable(result);
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable?.Races[0]?.PitStops || [];
}
