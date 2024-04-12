import {createReducer, on} from "@ngrx/store";
import {loadBalances, loadBalancesError, loadBalancesSuccess} from "../actions/geocoins.actions";
import {BalancesModel} from "../../model/currency/balances.model";

export interface BalancesState {
  balances: BalancesModel
  loading: boolean,
  error: string
}

export const initialState:BalancesState = {
  balances: {} as BalancesModel,
  loading: true,
  error: ''
}
export const balancesReducers = createReducer(
  initialState,
  on(loadBalances, (state) => ({ ...state, loading: true })),
  on(loadBalancesSuccess, (state, {balances}) => ({ ...state, balances, loading: false })),
  on(loadBalancesError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
