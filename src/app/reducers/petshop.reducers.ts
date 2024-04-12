import {createReducer, on} from "@ngrx/store";
import {PetShopModel} from "../model/pet/petshop.model";
import {buyPetError, loadPetShop, loadPetShopError, loadPetShopSuccess} from "../actions/petshop.actions";

export interface PetShopState {
  petShop: PetShopModel|undefined,
  loading: boolean,
  error: string
}

export const initialState:PetShopState = {
  petShop: {} as PetShopModel,
  loading: true,
  error: ''
}
export const PetShopReducer = createReducer(
  initialState,
  on(loadPetShop, (state) => ({ ...state, loading: true })),
  on(loadPetShopSuccess, (state, {petShop}) => ({ ...state, petShop, loading: false })),
  on(loadPetShopError, (state, {error}) => ({ ...state, error: error, loading: false })),
  on(buyPetError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
