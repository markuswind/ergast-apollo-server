import { RESTDataSource } from 'apollo-datasource-rest';
import { RequestInit, URLSearchParamsInit } from 'apollo-server-env';
import dayjs from 'dayjs';

import { BASE_URLS, CACHE_TIMES } from '../constants';

export class ErgastDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = BASE_URLS.ergast;
  }

  public async get(
    path: string,
    params?: URLSearchParamsInit,
    init?: RequestInit
  ): Promise<any> {
    const requestInit = init || {};
    const data = await super.get(path, params, {
      cacheOptions: {
        ttl: CACHE_TIMES.day
      },
      ...requestInit
    });

    return data;
  }

  // MARK: cache utils

  public async getCacheOptions(args: { year: number; round: number }) {
    const now = dayjs();

    const isCurrentYear = now.year() === args.year;
    const hasRaceRoundPast = isCurrentYear && this.hasRaceRoundPast(args);

    return {
      cacheOptions: {
        ttl: hasRaceRoundPast ? CACHE_TIMES.day : CACHE_TIMES.minutes
      }
    };
  }

  private async hasRaceRoundPast(args: { year: number; round: number }) {
    const now = dayjs();
    const schedule = await this.getRaceSchedule({ year: args.year });

    const race = schedule.find(
      (scheduledRace: any) => scheduledRace.round === args.round
    );

    if (race) {
      const raceDate = race.date ? dayjs(race.date) : false;

      if (raceDate && raceDate.isBefore(now.add(1, 'day'))) {
        return false;
      }
    }

    return true;
  }

  // MARK: schedule api calls

  private async getRaceSchedule(args: { year: number }) {
    const result = await this.get(`${args.year}.json`);
    return this.getRaceTable(result);
  }

  private getRaceTable = (result: any) => result.MRData.RaceTable.Races;
}
