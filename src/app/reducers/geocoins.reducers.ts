import {createReducer, on} from "@ngrx/store";
import {loadGeocoins, loadGeocoinsError, loadGeocoinsSuccess} from "../actions/geocoins.actions";

export interface GeocoinsState {
  geocoins: number
  loading: boolean,
  error: string
}

export const initialState:GeocoinsState = {
  geocoins: 0,
  loading: true,
  error: ''
}
export const geocoinsReducers = createReducer(
  initialState,
  on(loadGeocoins, (state) => ({ ...state, loading: true })),
  on(loadGeocoinsSuccess, (state, {amount}) => ({ ...state, geocoins: amount, loading: false })),
  on(loadGeocoinsError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
