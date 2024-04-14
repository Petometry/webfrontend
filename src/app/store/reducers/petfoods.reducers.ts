import {createReducer, on} from "@ngrx/store";
import {PetfoodsModel} from "../../model/currency/petfoods.model";
import {
  decreasePetfoods,
  increasePetfoods,
  loadPetfoods,
  loadPetfoodsError,
  loadPetfoodsSuccess
} from "../actions/petfoods.actions";

export interface PetfoodsState {
  petfoods: PetfoodsModel
  loading: boolean,
  error: string
}

export const initialState: PetfoodsState = {
  petfoods: {} as PetfoodsModel,
  loading: true,
  error: ''
}

function increasePetFoods(state: PetfoodsState, petfoods: PetfoodsModel) {
  state.petfoods.circle += petfoods.circle
  state.petfoods.triangle += petfoods.triangle
  state.petfoods.rectangle += petfoods.rectangle
  return {...state, loading: false};
}

function decreasePetFoods(state: PetfoodsState, petfoods: PetfoodsModel) {
  state.petfoods.circle -= petfoods.circle
  state.petfoods.triangle -= petfoods.triangle
  state.petfoods.rectangle -= petfoods.rectangle
  return {...state, loading: false};
}

export const petFoodsReducers = createReducer(
  initialState,
  on(loadPetfoods, (state) => ({...state, loading: true})),
  on(loadPetfoodsSuccess, (state, {petfoods}) => ({...state, petfoods, loading: false})),
  on(loadPetfoodsError, (state, {error}) => ({...state, error: error, loading: false})),

  on(increasePetfoods, (state, {petfoods}) => increasePetFoods(state, petfoods)),
  on(decreasePetfoods, (state, {petfoods}) => decreasePetFoods(state, petfoods)),
);
