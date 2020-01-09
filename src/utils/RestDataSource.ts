import { RESTDataSource } from 'apollo-datasource-rest';
import { BASE_URLS } from '../constants';

export class RestDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }
}
