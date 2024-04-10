import {createReducer, on} from "@ngrx/store";
import {Pet} from "../model/pet/pet";
import {loadPets, loadPetsError, loadPetsSuccess} from "../actions/pets.actions";

export interface PetsState {
  pets: Pet[],
  loading: boolean,
  error: string
}

export const initialState:PetsState = {
  pets: [],
  loading: true,
  error: ''
}
export const petsReducer = createReducer(
  initialState,
  on(loadPets, (state) => ({ ...state, loading: true })),
  on(loadPetsSuccess, (state, {pets}) => ({ ...state, pets, loading: false })),
  on(loadPetsError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
