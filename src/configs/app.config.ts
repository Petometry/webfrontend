import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from '../app/app.routes';
import {KeycloakService} from "keycloak-angular";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {KeycloakBearerInterceptorProvider, KeycloakInitializerProvider} from "./keycloak.config";
import {provideStore} from '@ngrx/store';
import {metaReducers, reducers} from './reducers.config';
import {provideEffects} from "@ngrx/effects";
import {ActivityEffects} from "../app/store/effects/activity.effects";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {WorkEffects} from "../app/store/effects/work.effects";
import {PetsEffects} from "../app/store/effects/pets.effects";
import {PetShopEffects} from "../app/store/effects/petshop.effects";
import {GeocoinsEffects} from "../app/store/effects/geocoins.effects";
import {ForagingEffects} from "../app/store/effects/foraging.effects";


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Provides HttpClient with interceptors
    KeycloakInitializerProvider, // Initializes Keycloak
    KeycloakBearerInterceptorProvider, // Provides Keycloak Bearer Interceptor
    KeycloakService, // Service for Keycloak
    provideRouter(routes) // Provides routing for the application
    ,
    provideStore(reducers, {metaReducers}),
    provideEffects(ActivityEffects, WorkEffects, PetsEffects, PetShopEffects, GeocoinsEffects, ForagingEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ]
};
