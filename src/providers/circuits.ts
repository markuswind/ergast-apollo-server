import { RESTDataSource } from 'apollo-datasource-rest';

import { BASE_URLS } from '../constants';
import { QueryCircuitArgs, QueryCircuitsArgs } from '../generated/graphql';

export class CircuitsProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

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
    result.MRData.CircuitTable.Circuits;
}
