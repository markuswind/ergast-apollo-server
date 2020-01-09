import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  type PitStop {
    driverId: String!
    stop: Int!
    lap: Int!
    time: String!
    duration: String!
  }

  extend type Query {
    pitstops(year: Int!, round: Int!): [PitStop!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    pitstops: (_, args, ctx) =>
      ctx.dataSources.pitstopsProvider.getPitstops(args)
  }
};
