import { CACHE_TIMES } from '../../constants';
import { QueryResultsArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class ResultsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getLastResults() {
    const result = await this.get(`/current/last/results.json`, undefined, {
      cacheOptions: {
        ttl: CACHE_TIMES.minutes
      }
    });

    return this.parseRaceTable(result);
  }

  public async getResults(args: QueryResultsArgs) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = await this.get(
      `${args.year}/${args.round}/results.json`,
      undefined,
      cacheOptions
    );

    return this.parseRaceTable(result);
  }

  public async getConstructorResult(args: {
    year: number;
    round: number;
    constructorId: string;
  }) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = await this.get(
      `/constructors/${args.constructorId}/${args.year}/${args.round}/results.json`,
      undefined,
      cacheOptions
    );

    return this.parseRaceTable(result)[0];
  }

  public async getDriverResult(args: {
    year: number;
    round: number;
    driverId: string;
  }) {
    const cacheOptions = await this.getCacheOptions(args);
    const result = await this.get(
      `drivers/${args.driverId}/${args.year}/${args.round}/results.json`,
      undefined,
      cacheOptions
    );

    return this.parseRaceTable(result)[0];
  }

  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable?.Races[0]?.Results || [];
}
