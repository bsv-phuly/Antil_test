// @ts-nocheck
// eslint-disable
// ---------------------------------------------------
// 🚗🚦 Generated by nuxt-typed-router. Do not modify !
// ---------------------------------------------------

/**
 * Exhaustive list of all the available route names in the app
 * */
export type RoutesNamesList = 'index' | 'login';

/**
 * Routes params are only required for the exact targeted route name,
 * vue-router behaviour allow to navigate between children routes without the need to provide all the params every time.
 * So we can't enforce params when navigating between routes, only a `[xxx].vue` page will have required params in the type definition
 *
 * */
export type RoutesParamsRecord = {
  index: never;
  login: never;
};

/**
 * Record resolved used for resolved routes
 *
 * */
export type RoutesParamsRecordResolved = {
  index: never;
  login: never;
};

/**
 * Discriminated union that will allow to infer params based on route name
 * It's used for programmatic navigation like router.push or <NuxtLink/>
 * */
export type RoutesNamedLocations = { name: 'index' } | { name: 'login' };

/**
 * Type returned by a resolved Route that will allow to type guard the route name.
 * By default the params are unknown
 * */
export type RoutesNamedLocationsResolved = {
  name: RoutesNamesList;
  params: unknown;
} & ({ name: 'index' } | { name: 'login' });

export type RoutesNamesListRecord = { index: 'index'; login: 'login' };

export const routesNames = { index: 'index' as const, login: 'login' as const };
