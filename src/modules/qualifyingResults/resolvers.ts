import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  type QualifyingResult {
    number: Int!
    position: Int!
    Q1: String
    Q2: String
    Q3: String
    Driver: Driver!
    Constructor: Constructor!
  }

  extend type Query {
    qualifyingResults(year: Int!, round: Int!): [QualifyingResult!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    qualifyingResults: (_, args, ctx) =>
      ctx.dataSources.qualifyingResultsProvider.getQualifyingResults(args)
  }
};
