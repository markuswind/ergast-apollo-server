import { gql } from 'apollo-server';
import merge from 'lodash.merge';

import * as circuitsModule from './circuits';
import * as constructorsModule from './constructors';
import * as driversModule from './drivers';
import * as pitstopsModule from './pitstops';
import * as qualifyingResultsModule from './qualifyingResults';
import * as resultsModule from './results';
import * as scheduleModule from './schedule';
import * as standingsModule from './standings';

// MARK: base types
// NOTE: these can be extended in multiple type definitions

const baseTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

// MARK: composition

export const providers = {
  circuits: new circuitsModule.CircuitsProvider(),
  constructors: new constructorsModule.ConstructorsProvider(),
  drivers: new driversModule.DriversProvider(),
  pitstops: new pitstopsModule.PitstopsProvider(),
  qualifyingResults: new qualifyingResultsModule.QualifyingResultsProvider(),
  results: new resultsModule.ResultsProvider(),
  schedule: new scheduleModule.ScheduleProvider(),
  standings: new standingsModule.StandingsProvider()
};

export const typeDefs = [
  baseTypeDefs,
  circuitsModule.typeDefs,
  constructorsModule.typeDefs,
  driversModule.typeDefs,
  pitstopsModule.typeDefs,
  qualifyingResultsModule.typeDefs,
  resultsModule.typeDefs,
  scheduleModule.typeDefs,
  standingsModule.typeDefs
];

export const resolvers = merge(
  circuitsModule.resolvers,
  constructorsModule.resolvers,
  driversModule.resolvers,
  pitstopsModule.resolvers,
  qualifyingResultsModule.resolvers,
  resultsModule.resolvers,
  scheduleModule.resolvers,
  standingsModule.resolvers
);
