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
  circuitsProvider: new circuitsModule.CircuitsProvider(),
  constructorsProvider: new constructorsModule.ConstructorsProvider(),
  driversProvider: new driversModule.DriversProvider(),
  pitstopsProvider: new pitstopsModule.PitstopsProvider(),
  qualifyingResultsProvider: new qualifyingResultsModule.QualifyingResultsProvider(),
  resultsProvider: new resultsModule.ResultsProvider(),
  scheduleProvider: new scheduleModule.ScheduleProvider(),
  standingsProvider: new standingsModule.StandingsProvider()
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
