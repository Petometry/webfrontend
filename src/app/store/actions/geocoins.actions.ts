import {createAction, props} from "@ngrx/store";
import {GeoCoinsModel} from "../../model/currency/geoCoinsModel";

// Load GeoCoins
export const loadGeoCoins = createAction('[Geocoins] Load Geocoins')
export const loadGeoCoinsSuccess = createAction('[Geocoins] Load Geocoins Success', props<{geocoins: GeoCoinsModel}>())
export const loadGeoCoinsError = createAction('[Geocoins] Load Geocoins Error', props<{error: string}>())

// No Backend from here
export const increaseGeoCoins = createAction('[Geocoins] Increase Geocoins', props<{geocoins: number}>())
export const decreaseGeoCoins = createAction('[Geocoins] Decrease Geocoins', props<{geocoins: number}>())
