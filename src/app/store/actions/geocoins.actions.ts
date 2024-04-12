import {createAction, props} from "@ngrx/store";

export const loadGeocoins = createAction('[Geocoins] Load Geocoins')
export const loadGeocoinsSuccess = createAction('[Geocoins] Load Geocoins Success', props<{amount: number}>())
export const loadGeocoinsError = createAction('[Geocoins] Load Geocoins Error', props<{error: string}>())
