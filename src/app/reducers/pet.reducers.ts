import {createReducer, on} from "@ngrx/store";
import {Pet} from "../model/pet/pet";
import {loadPet, loadPetError, loadPetSuccess} from "../actions/pet.actions";

export interface PetState {
  pet: Pet,
  loading: boolean,
  error: string
}

export const initialState:PetState = {
  pet: {} as Pet,
  loading: true,
  error: ''
}
export const petReducer = createReducer(
  initialState,
  on(loadPet, (state) => ({ ...state, loading: true })),
  on(loadPetSuccess, (state, {pet}) => ({ ...state, pet, loading: false })),
  on(loadPetError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
