import { gql } from 'apollo-server';
import merge from 'lodash.merge';

import * as circuitsResolver from './circuits';
import * as constructorsResolver from './constructors';
import * as driversResolver from './drivers';
import * as pitstopsResolver from './pitstops';
import * as qualifyingResultsResolver from './qualifyingResults';
import * as resultsResolver from './results';
import * as scheduleResolver from './schedule';
import * as standingsResolver from './standings';

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
  driversResolver.typeDefs,
  pitstopsResolver.typeDefs,
  qualifyingResultsResolver.typeDefs,
  resultsResolver.typeDefs,
  scheduleResolver.typeDefs,
  standingsResolver.typeDefs
];

export const resolvers = merge(
  circuitsResolver.resolvers,
  constructorsResolver.resolvers,
  driversResolver.resolvers,
  pitstopsResolver.resolvers,
  qualifyingResultsResolver.resolvers,
  resultsResolver.resolvers,
  scheduleResolver.resolvers,
  standingsResolver.resolvers
);
