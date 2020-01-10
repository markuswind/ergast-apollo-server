## About

A Graphql API which serves the Formula 1 result data from [ergast](http://ergast.com/).

## Getting started

First clone the repository and install dependencies.

```bash
$ git clone https://github.com/markuswind/apollo-server-boilerplate
$ npm ci
$ npm run start
```

## Caching

Caching is done in the `ErgastDataSource` class inside `src/utils/ErgastDataSource.ts`. This is also where you can set the `default` cache time, which currently is one day. For the results queries like `qualifyingResults`, `standings` and `pitstops` it will use `minutes` cache options when the round is either in the future or in the near past.

## Adding new (type safe) resolvers

Because we want to have type safe resolvers, it's the easiest to create new resolvers in order described below.

#### Type definitions

When adding new resolvers you should start with adding the `typeDefs` in your (new) `resolver.ts` file like following:

```ts
export const typeDefs = grapql`
  type Example {
    id: Int!
  }

  type Query {
    example(id: Int!): Example!
  }
`;
```

#### Generating types

The next step is updating the generated types like following:

```bash
$ npm run generate:types
```

#### Provider

After this you could create your update your (new) `provider.ts` file like following:

```ts
import { QueryExampleArgs } from './generated/graphql';

export class ExampleAPI extends RestDataSource {
  // ... constructor

  public async getExample(args: QueryExampleArgs) {
    // ... use typed args to return result
  }
}
```

**NOTE:** When adding a new provider you'll have to update the **context** in the `index.ts` file.

#### Resolvers

Finally you could create your typed resolvers in the `resolvers.ts` file like following:

```ts
import { IResolvers } from './generated/grapql';

export const resolvers: IResolvers = {
  Query: {
    example: (_, args, ctx) => ctx.dataSources.ExampleAPI.getExample(args)
  }
};
```

## Adding new providers

When creating a new module with a new `provider`, you'll have to add this provider in the `modules/index.ts` file like following:

```ts
export const providers = {
  exampleProvider: new ExampleProvider()
};
```

After this provider has been added in the `providers` object, you will have to run `npm run generate:types` in order to use in the resolvers.

## Known issuess

- The `constructor` queries do not follow the naming convention. Because `constructor` is a reserved keyword, we decided to use `getConstructor` instead.

## License

[MIT.](https://github.com/markuswind/ergast-apollo-server/blob/master/LICENSE)
