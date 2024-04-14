import {createReducer, on} from "@ngrx/store";
import {loadGeoCoins, loadGeoCoinsError, loadGeoCoinsSuccess} from "../actions/geocoins.actions";
import {GeocoinsModel} from "../../model/currency/geocoins.model";

export interface BalancesState {
  balances: GeocoinsModel
  loading: boolean,
  error: string
}

export const initialState:BalancesState = {
  balances: {} as GeocoinsModel,
  loading: true,
  error: ''
}
export const balancesReducers = createReducer(
  initialState,
  on(loadGeoCoins, (state) => ({ ...state, loading: true })),
  on(loadGeoCoinsSuccess, (state, {balances}) => ({ ...state, balances, loading: false })),
  on(loadGeoCoinsError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
