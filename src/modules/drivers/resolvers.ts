import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  type Driver {
    driverId: String!
    code: String!
    url: String!
    givenName: String!
    familyName: String!
    dateOfBirth: String!
    nationality: String!
  }

  extend type Query {
    driver(driverId: String!): Driver
    drivers(year: Int!): [Driver!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    driver: (_, args, ctx) => ctx.dataSources.driversProvider.getDriver(args),
    drivers: (_, args, ctx) => ctx.dataSources.driversProvider.getDrivers(args)
  }
};
