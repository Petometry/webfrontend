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

function increasePetFoods(state: PetfoodsState, increase: PetfoodsModel) {
  const circle = state.petfoods.circle + increase.circle
  const triangle = state.petfoods.triangle + increase.triangle
  const rectangle = state.petfoods.rectangle + increase.rectangle
  const petfoods = {circle, triangle, rectangle}
  return {...state, petfoods, loading: false};
}

function decreasePetFoods(state: PetfoodsState, decrease: PetfoodsModel) {
  const circle = state.petfoods.circle - decrease.circle
  const triangle = state.petfoods.triangle - decrease.triangle
  const rectangle = state.petfoods.rectangle - decrease.rectangle
  const petfoods = {circle, triangle, rectangle}
  return {...state, petfoods, loading: false};
}

export const petFoodsReducers = createReducer(
  initialState,
  on(loadPetfoods, (state) => ({...state, loading: true})),
  on(loadPetfoodsSuccess, (state, {petfoods}) => ({...state, petfoods, loading: false})),
  on(loadPetfoodsError, (state, {error}) => ({...state, error: error, loading: false})),

  on(increasePetfoods, (state, {petfoods}) => increasePetFoods(state, petfoods)),
  on(decreasePetfoods, (state, {petfoods}) => decreasePetFoods(state, petfoods)),
);
