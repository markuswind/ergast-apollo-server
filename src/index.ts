import { ApolloServer } from 'apollo-server';
import { providers, resolvers, typeDefs } from './modules';

// MARK: types

export interface Context {
  dataSources: typeof providers;
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
