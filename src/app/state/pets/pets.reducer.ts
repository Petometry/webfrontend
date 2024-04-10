import { createReducer, on } from '@ngrx/store';
import { add, remove, clear, updateAllState } from '/pets.action';
import { AppState } from '../app.state';

export const initialState: AppState = {
  pets:[],
};

export const petsReducer = createReducer(
  
  initialState,
  on(add, (state, {pet}) => ({
      ...state,
      pets: [...state.products, pet]
    })),
  
  on(remove, (state, {pet}) => ({
    ...state,
    pets: state.pets.filter((p)=> pet.id != p.id)
  })),
  on(updateAllState, (state, {pets}) => ({
      ...state,
      pets
  })),
  on(clear, state => initialState)
);
