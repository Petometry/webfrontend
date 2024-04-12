import {createAction, props} from "@ngrx/store";
import {BalancesModel} from "../../model/currency/balances.model";

export const loadBalances = createAction('[Balances] Load Balances')
export const loadBalancesSuccess = createAction('[Balances] Load Balances Success', props<{balances: BalancesModel}>())
export const loadBalancesError = createAction('[Balances] Load Balances Error', props<{error: string}>())
