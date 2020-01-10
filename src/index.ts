import { ApolloServer } from 'apollo-server';
import { providers, resolvers, typeDefs } from './modules';

// MARK: types

export interface Context {
  dataSources: {
    circuitsProvider: typeof providers.circuitsProvider;
    constructorsProvider: typeof providers.constructorsProvider;
    driversProvider: typeof providers.driversProvider;
    pitstopsProvider: typeof providers.pitstopsProvider;
    qualifyingResultsProvider: typeof providers.qualifyingResultsProvider;
    resultsProvider: typeof providers.resultsProvider;
    scheduleProvider: typeof providers.scheduleProvider;
    standingsProvider: typeof providers.standingsProvider;
  };
}

// MARK: composition

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => providers
});

// MARK: main

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // tslint:disable-line no-console
});
