import {createReducer, on} from "@ngrx/store";
import {
  decreaseGeoCoins,
  increaseGeoCoins,
  loadGeoCoins,
  loadGeoCoinsError,
  loadGeoCoinsSuccess
} from "../actions/geocoins.actions";
import {GeoCoinsModel} from "../../model/currency/geoCoinsModel";

export interface GeoCoinsState {
  geocoins: GeoCoinsModel
  loading: boolean,
  error: string
}

export const initialState:GeoCoinsState = {
  geocoins: {} as GeoCoinsModel,
  loading: true,
  error: ''
}
export const geoCoinsReducers = createReducer(
  initialState,
  // @formatter:off
  on(loadGeoCoins, (state) => ({ ...state, loading: true })),
  on(loadGeoCoinsSuccess, (state, {geocoins}) => ({ ...state, geocoins, loading: false })),
  on(loadGeoCoinsError, (state, {error}) => ({ ...state, error: error, loading: false })),
  // Increase GeoCoins
  on(increaseGeoCoins, (state, {geocoins}) => ({...state, geocoins : {geocoins: state.geocoins.geocoins + geocoins},loading: false})),
  // Decrease Geo coins
  on(decreaseGeoCoins, (state, {geocoins}) => ({...state, geocoins : {geocoins: state.geocoins.geocoins - geocoins},loading: false})),
  // @formatter:on
);
