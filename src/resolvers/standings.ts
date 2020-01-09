import { gql } from 'apollo-server';
import { IResolvers } from '../generated/graphql';

export const typeDefs = gql`
  extend type Driver {
    standing(year: Int!): Standing!
  }

  type Standing {
    position: Int!
    positionText: String!
    points: Int!
    wins: Int!
    Constructors: [Constructor!]
  }

  extend type Query {
    standings(year: Int!): [Standing!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    standings: (_, args, ctx) =>
      ctx.dataSources.standingsProvider.getStandings(args)
  }
  // Driver: {
  //   standing: (driver, args, ctx) =>
  //     ctx.dataSources.standingsProvider.getDriverStandings({
  //       driverId: driver.driverId,
  //       ...args
  //     })
  // }
};
