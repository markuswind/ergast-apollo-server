import { ApolloServer } from 'apollo-server';

import { providers, resolvers, typeDefs } from './modules';

// MARK: types

export interface Context {
  dataSources: {
    circuitsProvider: typeof providers.circuits;
    constructorsProvider: typeof providers.constructors;
    driversProvider: typeof providers.drivers;
    pitstopsProvider: typeof providers.pitstops;
    qualifyingResultsProvider: typeof providers.qualifyingResults;
    resultsProvider: typeof providers.results;
    scheduleProvider: typeof providers.schedule;
    standingsProvider: typeof providers.standings;
  };
}

// MARK: composition

const dataSources = (): Context['dataSources'] => {
  return {
    circuitsProvider: providers.circuits,
    constructorsProvider: providers.constructors,
    driversProvider: providers.drivers,
    pitstopsProvider: providers.pitstops,
    qualifyingResultsProvider: providers.qualifyingResults,
    resultsProvider: providers.results,
    scheduleProvider: providers.schedule,
    standingsProvider: providers.standings
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources
});

// MARK: main

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
