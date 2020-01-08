/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../index';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Circuit = {
   __typename?: 'Circuit',
  circuitId: Scalars['String'],
  url: Scalars['String'],
  circuitName: Scalars['String'],
  Location: Location,
};

export type Constructor = {
   __typename?: 'Constructor',
  constructorId: Scalars['String'],
  url: Scalars['String'],
  name: Scalars['String'],
  nationality: Scalars['String'],
  drivers?: Maybe<Array<Driver>>,
};


export type ConstructorDriversArgs = {
  year: Scalars['Int']
};

export type Driver = {
   __typename?: 'Driver',
  constructor: Constructor,
  driverId: Scalars['String'],
  code: Scalars['String'],
  url: Scalars['String'],
  givenName: Scalars['String'],
  familyName: Scalars['String'],
  dateOfBirth: Scalars['String'],
  nationality: Scalars['String'],
};


export type DriverConstructorArgs = {
  year: Scalars['Int']
};

export type Location = {
   __typename?: 'Location',
  lat: Scalars['Float'],
  long: Scalars['Float'],
  locality: Scalars['String'],
  country: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  circuit?: Maybe<Circuit>,
  circuits?: Maybe<Array<Circuit>>,
  getConstructor?: Maybe<Constructor>,
  constructors?: Maybe<Array<Constructor>>,
  driver?: Maybe<Driver>,
  drivers?: Maybe<Array<Driver>>,
  _empty?: Maybe<Scalars['String']>,
};


export type QueryCircuitArgs = {
  circuitId: Scalars['String']
};


export type QueryCircuitsArgs = {
  year: Scalars['Int']
};


export type QueryGetConstructorArgs = {
  constructorId: Scalars['String']
};


export type QueryConstructorsArgs = {
  year: Scalars['Int']
};


export type QueryDriverArgs = {
  driverId: Scalars['String']
};


export type QueryDriversArgs = {
  year: Scalars['Int']
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Circuit: ResolverTypeWrapper<Circuit>,
  Location: ResolverTypeWrapper<Location>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Constructor: ResolverTypeWrapper<Constructor>,
  Driver: ResolverTypeWrapper<Driver>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Circuit: Circuit,
  Location: Location,
  Float: Scalars['Float'],
  Int: Scalars['Int'],
  Constructor: Constructor,
  Driver: Driver,
  Boolean: Scalars['Boolean'],
};

export type CircuitResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Circuit'] = ResolversParentTypes['Circuit']> = {
  circuitId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  circuitName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Location?: Resolver<ResolversTypes['Location'], ParentType, ContextType>,
};

export type ConstructorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Constructor'] = ResolversParentTypes['Constructor']> = {
  constructorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  drivers?: Resolver<Maybe<Array<ResolversTypes['Driver']>>, ParentType, ContextType, RequireFields<ConstructorDriversArgs, 'year'>>,
};

export type DriverResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Driver'] = ResolversParentTypes['Driver']> = {
  constructor?: Resolver<ResolversTypes['Constructor'], ParentType, ContextType, RequireFields<DriverConstructorArgs, 'year'>>,
  driverId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  familyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type LocationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  long?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  locality?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  circuit?: Resolver<Maybe<ResolversTypes['Circuit']>, ParentType, ContextType, RequireFields<QueryCircuitArgs, 'circuitId'>>,
  circuits?: Resolver<Maybe<Array<ResolversTypes['Circuit']>>, ParentType, ContextType, RequireFields<QueryCircuitsArgs, 'year'>>,
  getConstructor?: Resolver<Maybe<ResolversTypes['Constructor']>, ParentType, ContextType, RequireFields<QueryGetConstructorArgs, 'constructorId'>>,
  constructors?: Resolver<Maybe<Array<ResolversTypes['Constructor']>>, ParentType, ContextType, RequireFields<QueryConstructorsArgs, 'year'>>,
  driver?: Resolver<Maybe<ResolversTypes['Driver']>, ParentType, ContextType, RequireFields<QueryDriverArgs, 'driverId'>>,
  drivers?: Resolver<Maybe<Array<ResolversTypes['Driver']>>, ParentType, ContextType, RequireFields<QueryDriversArgs, 'year'>>,
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Circuit?: CircuitResolvers<ContextType>,
  Constructor?: ConstructorResolvers<ContextType>,
  Driver?: DriverResolvers<ContextType>,
  Location?: LocationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
