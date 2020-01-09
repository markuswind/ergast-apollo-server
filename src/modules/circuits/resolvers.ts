import { gql } from 'apollo-server';
import { IResolvers } from '../../generated/graphql';

export const typeDefs = gql`
  type Location {
    lat: Float!
    long: Float!
    locality: String!
    country: String!
  }

  type Circuit {
    circuitId: String!
    url: String!
    circuitName: String!
    Location: Location!
  }

  extend type Query {
    circuit(circuitId: String!): Circuit
    circuits(year: Int!): [Circuit!]
  }
`;

export const resolvers: IResolvers = {
  Query: {
    circuit: (_, args, ctx) =>
      ctx.dataSources.circuitsProvider.getCircuit(args),
    circuits: (_, args, ctx) =>
      ctx.dataSources.circuitsProvider.getCircuits(args)
  }
};
