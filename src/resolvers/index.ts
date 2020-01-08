import { gql } from 'apollo-server';
import merge from 'lodash.merge';

import * as circuitsResolver from './circuits';
import * as constructorsResolver from './constructors';
import * as driversResolver from './drivers';

// MARK: base types
// NOTE: these can be extended in multiple type definitions

const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

// MARK: composition

export const typeDefs = [
  baseTypeDefs,
  circuitsResolver.typeDefs,
  constructorsResolver.typeDefs,
  driversResolver.typeDefs
];

export const resolvers = merge(
  circuitsResolver.resolvers,
  constructorsResolver.resolvers,
  driversResolver.resolvers
);
