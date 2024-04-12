import {createReducer, on} from "@ngrx/store";
import {Pet} from "../model/pet/pet";
import {loadPets, loadPetsError, loadPetsSuccess} from "../actions/pets.actions";

export interface PetsState {
  petsEntities: {[id:number] : Pet}
  pets: Pet[],
  loading: boolean,
  error: string
}

export const initialState:PetsState = {
  petsEntities: {[id:number] : Pet}
  petsEntities: {}
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
