import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  extend type Constructor {
    standing(year: Int!): Standing!
  }

  extend type Driver {
    standing(year: Int!): Standing!
  }

  type Standing {
    position: Int!
    positionText: String!
    points: Int!
    wins: Int!
    Driver: Driver!
    Constructors: [Constructor!]
  }

  extend type Query {
    constructorStandings(year: Int!): [Standing!]
    driverStandings(year: Int!): [Standing!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    constructorStandings: (_, args, ctx) =>
      ctx.dataSources.standingsProvider.getConstructorStandings(args),
    driverStandings: (_, args, ctx) =>
      ctx.dataSources.standingsProvider.getDriverStandings(args)
  },
  Constructor: {
    standing: (constructor, args, ctx) =>
      ctx.dataSources.standingsProvider.getConstructorStanding({
        constructorId: constructor.constructorId,
        ...args
      })
  },
  Driver: {
    standing: (driver, args, ctx) =>
      ctx.dataSources.standingsProvider.getDriverStanding({
        driverId: driver.driverId,
        ...args
      })
  }
};
