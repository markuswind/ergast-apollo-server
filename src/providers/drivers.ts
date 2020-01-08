import { DataSource } from 'apollo-datasource';

const drivers = [
  {
    driverId: 'albon',
    permanentNumber: '23',
    code: 'ALB',
    url: 'http://en.wikipedia.org/wiki/Alexander_Albon',
    givenName: 'Alexander',
    familyName: 'Albon',
    dateOfBirth: '1996-03-23',
    nationality: 'Thai'
  },
  {
    driverId: 'bottas',
    permanentNumber: '77',
    code: 'BOT',
    url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
    givenName: 'Valtteri',
    familyName: 'Bottas',
    dateOfBirth: '1989-08-28',
    nationality: 'Finnish'
  }
];

export class DriversProvider extends DataSource {
  public async getDrivers() {
    return drivers;
  }
}
