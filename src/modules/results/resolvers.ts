import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  extend type Constructor {
    result(year: Int!, round: Int!): Result!
  }

  extend type Driver {
    result(year: Int!, round: Int!): Result!
  }

  type AverageSpeed {
    units: Int!
    speed: Int!
  }

  type Time {
    millis: Int!
    time: String!
  }

  type FastestLap {
    rank: Int!
    lap: Int!
    Time: Time!
    AverageSpeed: AverageSpeed!
  }

  type Result {
    number: Int!
    position: Int!
    points: Int!
    grid: Int!
    laps: Int!
    status: String!
    fastestLap: FastestLap!
    Driver: Driver!
  }

  extend type Query {
    lastResults: [Result!]
    results(year: Int!, round: Int!): [Result!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    lastResults: (_, __, ctx) =>
      ctx.dataSources.resultsProvider.getLastResults(),
    results: (_, args, ctx) => ctx.dataSources.resultsProvider.getResults(args)
  },
  Constructor: {
    result: (constructor, args, ctx) =>
      ctx.dataSources.resultsProvider.getConstructorResult({
        constructorId: constructor.constructorId,
        ...args
      })
  },
  Driver: {
    result: (driver, args, ctx) =>
      ctx.dataSources.resultsProvider.getDriverResult({
        driverId: driver.driverId,
        ...args
      })
  }
};
