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

export type AverageSpeed = {
   __typename?: 'AverageSpeed',
  units: Scalars['Int'],
  speed: Scalars['Int'],
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
  result: Result,
  standing: Standing,
};


export type ConstructorDriversArgs = {
  year: Scalars['Int']
};


export type ConstructorResultArgs = {
  year: Scalars['Int'],
  round: Scalars['Int']
};


export type ConstructorStandingArgs = {
  year: Scalars['Int']
};

export type Driver = {
   __typename?: 'Driver',
  getConstructor: Constructor,
  driverId: Scalars['String'],
  code: Scalars['String'],
  url: Scalars['String'],
  givenName: Scalars['String'],
  familyName: Scalars['String'],
  dateOfBirth: Scalars['String'],
  nationality: Scalars['String'],
  result: Result,
  standing: Standing,
};


export type DriverGetConstructorArgs = {
  year: Scalars['Int']
};


export type DriverResultArgs = {
  year: Scalars['Int'],
  round: Scalars['Int']
};


export type DriverStandingArgs = {
  year: Scalars['Int']
};

export type FastestLap = {
   __typename?: 'FastestLap',
  rank: Scalars['Int'],
  lap: Scalars['Int'],
  Time: Time,
  AverageSpeed: AverageSpeed,
};

export type Location = {
   __typename?: 'Location',
  lat: Scalars['Float'],
  long: Scalars['Float'],
  locality: Scalars['String'],
  country: Scalars['String'],
};

export type PitStop = {
   __typename?: 'PitStop',
  driverId: Scalars['String'],
  stop: Scalars['Int'],
  lap: Scalars['Int'],
  time: Scalars['String'],
  duration: Scalars['String'],
};

export type QualifyingResult = {
   __typename?: 'QualifyingResult',
  number: Scalars['Int'],
  position: Scalars['Int'],
  Q1: Scalars['String'],
  Q2: Scalars['String'],
  Q3: Scalars['String'],
  Driver: Driver,
  Constructor: Constructor,
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
  pitstops?: Maybe<Array<PitStop>>,
  qualifyingResults?: Maybe<Array<QualifyingResult>>,
  results?: Maybe<Array<Result>>,
  schedule?: Maybe<Array<Race>>,
  constructorStandings?: Maybe<Array<Standing>>,
  driverStandings?: Maybe<Array<Standing>>,
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


export type QueryPitstopsArgs = {
  year: Scalars['Int'],
  round: Scalars['Int']
};


export type QueryQualifyingResultsArgs = {
  year: Scalars['Int'],
  round: Scalars['Int']
};


export type QueryResultsArgs = {
  year: Scalars['Int'],
  round: Scalars['Int']
};


export type QueryScheduleArgs = {
  year: Scalars['Int']
};


export type QueryConstructorStandingsArgs = {
  year: Scalars['Int']
};


export type QueryDriverStandingsArgs = {
  year: Scalars['Int']
};

export type Race = {
   __typename?: 'Race',
  season: Scalars['Int'],
  round: Scalars['Int'],
  url: Scalars['String'],
  raceName: Scalars['String'],
  date: Scalars['String'],
  time: Scalars['String'],
  Circuit: Circuit,
};

export type Result = {
   __typename?: 'Result',
  number: Scalars['Int'],
  position: Scalars['Int'],
  points: Scalars['Int'],
  grid: Scalars['Int'],
  laps: Scalars['Int'],
  status: Scalars['String'],
  fastestLap: FastestLap,
};

export type Standing = {
   __typename?: 'Standing',
  position: Scalars['Int'],
  positionText: Scalars['String'],
  points: Scalars['Int'],
  wins: Scalars['Int'],
  Driver: Driver,
  Constructors?: Maybe<Array<Constructor>>,
};

export type Time = {
   __typename?: 'Time',
  millis: Scalars['Int'],
  time: Scalars['String'],
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
  Result: ResolverTypeWrapper<Result>,
  FastestLap: ResolverTypeWrapper<FastestLap>,
  Time: ResolverTypeWrapper<Time>,
  AverageSpeed: ResolverTypeWrapper<AverageSpeed>,
  Standing: ResolverTypeWrapper<Standing>,
  PitStop: ResolverTypeWrapper<PitStop>,
  QualifyingResult: ResolverTypeWrapper<QualifyingResult>,
  Race: ResolverTypeWrapper<Race>,
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
  Result: Result,
  FastestLap: FastestLap,
  Time: Time,
  AverageSpeed: AverageSpeed,
  Standing: Standing,
  PitStop: PitStop,
  QualifyingResult: QualifyingResult,
  Race: Race,
  Boolean: Scalars['Boolean'],
};

export type AverageSpeedResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AverageSpeed'] = ResolversParentTypes['AverageSpeed']> = {
  units?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  speed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
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
  result?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<ConstructorResultArgs, 'year' | 'round'>>,
  standing?: Resolver<ResolversTypes['Standing'], ParentType, ContextType, RequireFields<ConstructorStandingArgs, 'year'>>,
};

export type DriverResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Driver'] = ResolversParentTypes['Driver']> = {
  getConstructor?: Resolver<ResolversTypes['Constructor'], ParentType, ContextType, RequireFields<DriverGetConstructorArgs, 'year'>>,
  driverId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  givenName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  familyName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  dateOfBirth?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  nationality?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  result?: Resolver<ResolversTypes['Result'], ParentType, ContextType, RequireFields<DriverResultArgs, 'year' | 'round'>>,
  standing?: Resolver<ResolversTypes['Standing'], ParentType, ContextType, RequireFields<DriverStandingArgs, 'year'>>,
};

export type FastestLapResolvers<ContextType = Context, ParentType extends ResolversParentTypes['FastestLap'] = ResolversParentTypes['FastestLap']> = {
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  lap?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  Time?: Resolver<ResolversTypes['Time'], ParentType, ContextType>,
  AverageSpeed?: Resolver<ResolversTypes['AverageSpeed'], ParentType, ContextType>,
};

export type LocationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  lat?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  long?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  locality?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type PitStopResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PitStop'] = ResolversParentTypes['PitStop']> = {
  driverId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  stop?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  lap?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QualifyingResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['QualifyingResult'] = ResolversParentTypes['QualifyingResult']> = {
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  Q1?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Q2?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Q3?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Driver?: Resolver<ResolversTypes['Driver'], ParentType, ContextType>,
  Constructor?: Resolver<ResolversTypes['Constructor'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  circuit?: Resolver<Maybe<ResolversTypes['Circuit']>, ParentType, ContextType, RequireFields<QueryCircuitArgs, 'circuitId'>>,
  circuits?: Resolver<Maybe<Array<ResolversTypes['Circuit']>>, ParentType, ContextType, RequireFields<QueryCircuitsArgs, 'year'>>,
  getConstructor?: Resolver<Maybe<ResolversTypes['Constructor']>, ParentType, ContextType, RequireFields<QueryGetConstructorArgs, 'constructorId'>>,
  constructors?: Resolver<Maybe<Array<ResolversTypes['Constructor']>>, ParentType, ContextType, RequireFields<QueryConstructorsArgs, 'year'>>,
  driver?: Resolver<Maybe<ResolversTypes['Driver']>, ParentType, ContextType, RequireFields<QueryDriverArgs, 'driverId'>>,
  drivers?: Resolver<Maybe<Array<ResolversTypes['Driver']>>, ParentType, ContextType, RequireFields<QueryDriversArgs, 'year'>>,
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pitstops?: Resolver<Maybe<Array<ResolversTypes['PitStop']>>, ParentType, ContextType, RequireFields<QueryPitstopsArgs, 'year' | 'round'>>,
  qualifyingResults?: Resolver<Maybe<Array<ResolversTypes['QualifyingResult']>>, ParentType, ContextType, RequireFields<QueryQualifyingResultsArgs, 'year' | 'round'>>,
  results?: Resolver<Maybe<Array<ResolversTypes['Result']>>, ParentType, ContextType, RequireFields<QueryResultsArgs, 'year' | 'round'>>,
  schedule?: Resolver<Maybe<Array<ResolversTypes['Race']>>, ParentType, ContextType, RequireFields<QueryScheduleArgs, 'year'>>,
  constructorStandings?: Resolver<Maybe<Array<ResolversTypes['Standing']>>, ParentType, ContextType, RequireFields<QueryConstructorStandingsArgs, 'year'>>,
  driverStandings?: Resolver<Maybe<Array<ResolversTypes['Standing']>>, ParentType, ContextType, RequireFields<QueryDriverStandingsArgs, 'year'>>,
};

export type RaceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Race'] = ResolversParentTypes['Race']> = {
  season?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  raceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Circuit?: Resolver<ResolversTypes['Circuit'], ParentType, ContextType>,
};

export type ResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  grid?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  laps?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fastestLap?: Resolver<ResolversTypes['FastestLap'], ParentType, ContextType>,
};

export type StandingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Standing'] = ResolversParentTypes['Standing']> = {
  position?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  positionText?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  wins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  Driver?: Resolver<ResolversTypes['Driver'], ParentType, ContextType>,
  Constructors?: Resolver<Maybe<Array<ResolversTypes['Constructor']>>, ParentType, ContextType>,
};

export type TimeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Time'] = ResolversParentTypes['Time']> = {
  millis?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  AverageSpeed?: AverageSpeedResolvers<ContextType>,
  Circuit?: CircuitResolvers<ContextType>,
  Constructor?: ConstructorResolvers<ContextType>,
  Driver?: DriverResolvers<ContextType>,
  FastestLap?: FastestLapResolvers<ContextType>,
  Location?: LocationResolvers<ContextType>,
  PitStop?: PitStopResolvers<ContextType>,
  QualifyingResult?: QualifyingResultResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Race?: RaceResolvers<ContextType>,
  Result?: ResultResolvers<ContextType>,
  Standing?: StandingResolvers<ContextType>,
  Time?: TimeResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
