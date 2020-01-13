import { QueryCircuitArgs, QueryCircuitsArgs } from '../../generated/graphql';
import { ErgastDataSource } from '../../utils/ErgastDataSource';

export class CircuitsProvider extends ErgastDataSource {
  // MARK: api calls

  public async getCircuit(args: QueryCircuitArgs) {
    const result = await this.get(`circuits/${args.circuitId}.json`);
    const circuitTable = this.parseCircuitTable(result);

    return circuitTable[0];
  }

  public async getCircuits(args: QueryCircuitsArgs) {
    const result = await this.get(`${args.year}/circuits.json`);
    return this.parseCircuitTable(result);
  }

  // MARK: result parsing

  private parseCircuitTable = (result: any) =>
    result.MRData.CircuitTable?.Circuits || [];
}
