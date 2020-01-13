import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  extend type Driver {
    lapTimes(year: Int!, round: Int!): [Lap!]
  }

  type Timing {
    driverId: String!
    position: Int!
    time: String!
  }

  type Lap {
    number: Int!
    Timings: [Timing!]
  }

  extend type Query {
    lapTimes(year: Int!, round: Int!): [Lap!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    lapTimes: (_, args, ctx) =>
      ctx.dataSources.lapTimesProvider.getLapTimes(args)
  },
  Driver: {
    lapTimes: (driver, args, ctx) =>
      ctx.dataSources.lapTimesProvider.getDriverLapTimes({
        driverId: driver.driverId,
        ...args
      })
  }
};
