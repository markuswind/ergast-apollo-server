import { gql } from 'apollo-server';
import { IResolvers } from '../generated/graphql';

export const typeDefs = gql`
  type Race {
    season: Int!
    round: Int!
    url: String!
    raceName: String!
    date: String!
    time: String!
    Circuit: Circuit!
  }

  extend type Query {
    schedule(year: Int!): [Race!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    schedule: (_, args, ctx) =>
      ctx.dataSources.scheduleProvider.getSchedule(args)
  }
};
