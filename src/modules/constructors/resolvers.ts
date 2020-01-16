import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  type Constructor {
    carImage: String
    color: String
    constructorId: String!
    url: String!
    name: String!
    nationality: String!
    drivers(year: Int!): [Driver!]
  }

  extend type Driver {
    getConstructor(year: Int!): Constructor!
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
    getConstructor: (driver, args, ctx) =>
      ctx.dataSources.constructorsProvider.getDriverConstructor({
        year: args.year,
        driverId: driver.driverId
      })
  }
};
