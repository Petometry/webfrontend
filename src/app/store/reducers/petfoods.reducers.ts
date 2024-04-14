import {createReducer, on} from "@ngrx/store";
import {PetfoodsModel} from "../../model/currency/petfoods.model";
import {loadPetfoods, loadPetfoodsError, loadPetfoodsSuccess} from "../actions/petfoods.actions";

export interface PetfoodsState {
  petfoods: PetfoodsModel
  loading: boolean,
  error: string
}

export const initialState:PetfoodsState = {
  petfoods: {} as PetfoodsModel,
  loading: true,
  error: ''
}
export const balancesReducers = createReducer(
  initialState,
  on(loadPetfoods, (state) => ({ ...state, loading: true })),
  on(loadPetfoodsSuccess, (state, {petfoods}) => ({ ...state, petfoods, loading: false })),
  on(loadPetfoodsError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
