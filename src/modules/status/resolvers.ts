import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  extend type Driver {
    status(year: Int!, round: Int!): Status
  }

  type Status {
    id: String!
    count: Int!
    status: String!
  }
`;

export const resolvers: IResolvers = {
  Driver: {
    status: (driver, args, ctx) =>
      ctx.dataSources.statusProvider.getDriverStatus({
        driverId: driver.driverId,
        ...args
      })
  }
};
