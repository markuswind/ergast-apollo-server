import { QueryQualifyingResultsArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class QualifyingResultsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getQualifyingResults(args: QueryQualifyingResultsArgs) {
    const result = await this.get(`${args.year}/${args.round}/qualifying.json`);
    return this.parseRaceTable(result);
  }
  // MARK: result parsing

  private parseRaceTable = (result: any) =>
    result.MRData.RaceTable.Races[0].QualifyingResults;
}
