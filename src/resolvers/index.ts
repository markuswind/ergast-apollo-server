import { gql } from 'apollo-server';
import merge from 'lodash.merge';

import * as constructorsResolver from './constructors';
import * as driversResolver from './drivers';

// NOTE: We're defining the `Query` type here, so we can `extend Query` in the seperate files.
const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

export const typeDefs = [
  baseTypeDefs,
  constructorsResolver.typeDefs,
  driversResolver.typeDefs
];

export const resolvers = merge(
  constructorsResolver.resolvers,
  driversResolver.resolvers
);
