import { QueryQualifyingResultsArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class QualifyingResultsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getQualifyingResults(args: QueryQualifyingResultsArgs) {
    const cachingOptions = await this.getCacheOptions(args);
    const result = await this.get(
      `${args.year}/${args.round}/qualifying.json`,
      undefined,
      cachingOptions
    );

    return this.parseRaceTable(result);
  }
  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable?.Races[0]?.QualifyingResults || [];
}
