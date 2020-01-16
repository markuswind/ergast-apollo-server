import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

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
    currentSchedule: [Race!]
    schedule(year: Int!): [Race!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    currentSchedule: (_, __, ctx) =>
      ctx.dataSources.scheduleProvider.getCurrentSchedule(),
    schedule: (_, args, ctx) =>
      ctx.dataSources.scheduleProvider.getSchedule(args)
  }
};
