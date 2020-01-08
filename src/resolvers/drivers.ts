import { gql } from 'apollo-server';
import { IResolvers } from '../generated/graphql';

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

  type Query {
    driver(driverId: String!): Driver
    drivers(year: Int!): [Driver!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    drivers: (_, __, ctx) => ctx.dataSources.driversProvider.getDrivers()
  }
};
