import { ApolloServer } from 'apollo-server';

import { ConstructorsProvider, DriversProvider } from './providers';
import { resolvers, typeDefs } from './resolvers';

// MARK: types

export interface Context {
  dataSources: {
    constructorsProvider: ConstructorsProvider;
    driversProvider: DriversProvider;
  };
}

// MARK: composition

const dataSources = (): Context['dataSources'] => {
  return {
    constructorsProvider: new ConstructorsProvider(),
    driversProvider: new DriversProvider()
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
