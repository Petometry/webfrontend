import {createReducer, on} from "@ngrx/store";
import {Pet} from "../model/pet/pet";
import {loadPets, loadPetsError, loadPetsSuccess} from "../actions/pets.actions";

export interface PetsState {
  petsEntities: PetsEntities,
  pets: Pet[],
  loading: boolean,
  error: string
}

export interface PetsEntities {
[id:number] : Pet
}

export const initialState:PetsState = {
  petsEntities: {} as PetsEntities,
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
