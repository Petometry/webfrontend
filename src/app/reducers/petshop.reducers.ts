import {createReducer, on} from "@ngrx/store";
import {PetShop} from "../model/pet/petshop.service";
import {loadPetShop, loadPetShopError, loadPetShopSuccess} from "../actions/petshop.actions";

export interface PetShopState {
  petShop: PetShop|undefined,
  loading: boolean,
  error: string
}

export const initialState:PetShopState = {
  petShop: {} as PetShop,
  loading: true,
  error: ''
}
export const PetShopReducer = createReducer(
  initialState,
  on(loadPetShop, (state) => ({ ...state, loading: true })),
  on(loadPetShopSuccess, (state, {petShop}) => ({ ...state, petShop, loading: false })),
  on(loadPetShopError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
