import { gql } from 'apollo-server';
import { IResolvers } from '../generated/graphql';

export const typeDefs = gql`
  type Constructor {
    constructorId: String!
    url: String!
    name: String!
    nationality: String!
    drivers(year: Int!): [Driver!]
  }

  extend type Driver {
    constructor(year: Int!): Constructor!
  }

  extend type Query {
    getConstructor(constructorId: String!): Constructor
    constructors(year: Int!): [Constructor!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    getConstructor: (_, args, ctx) =>
      ctx.dataSources.constructorsProvider.getConstructor(args),
    constructors: (_, args, ctx) =>
      ctx.dataSources.constructorsProvider.getConstructors(args)
  },
  Driver: {
    constructor: (driver, args, ctx) =>
      ctx.dataSources.constructorsProvider.getDriverConstructor({
        year: args.year,
        driverId: driver.driverId
      })
  }
};
