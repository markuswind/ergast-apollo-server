import { gql } from 'apollo-server';
import { IResolvers } from '../generated/graphql';

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
  }

  extend type Query {
    results(year: Int!, round: Int!): [Result!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    results: (_, args, ctx) => ctx.dataSources.resultsProvider.getResults(args)
  },
  Constructor: {
    result: (constructor, args, ctx) =>
      ctx.dataSources.resultsProvider.getConstructorResult({
        constructorId: constructor.constructorId,
        ...args
      })
  }
  // Driver: {
  //   result: (driver, args, ctx) =>
  //     ctx.dataSources.resultsProvider.getDriverResult({
  //       driverId: driver.driverId,
  //       ...args
  //     })
  // }
};
