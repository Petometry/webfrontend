import {createAction, props} from "@ngrx/store";
import {GeocoinsModel} from "../../model/currency/geocoins.model";

// Load GeoCoins
export const loadGeoCoins = createAction('[Geocoins] Load Geocoins')
export const loadGeoCoinsSuccess = createAction('[Geocoins] Load Geocoins Success', props<{balances: GeocoinsModel}>())
export const loadGeoCoinsError = createAction('[Geocoins] Load Geocoins Error', props<{error: string}>())

// No Backend from here
export const increaseGeoCoins = createAction('[Geocoins] Increase Geocoins', props<{amount: number}>())
export const decreaseGeoCoins = createAction('[Geocoins] Decrease Geocoins', props<{amount: number}>())
