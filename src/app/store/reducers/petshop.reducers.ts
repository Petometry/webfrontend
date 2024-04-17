import {createReducer, on} from "@ngrx/store";
import {PetShopModel} from "../../model/pet/petshop.model";
import {
  buyPet,
  buyPetError,
  buyPetSuccess,
  loadPetShop,
  loadPetShopError,
  loadPetShopSuccess
} from "../actions/petshop.actions";
import {PetModel} from "../../model/pet/pet.model";

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

function removePetFromPetshop(state:PetShopState, pet: PetModel) {
  let petShop = state.petShop!
  const index = petShop.pets.indexOf(pet, 0);
  petShop.pets = petShop.pets.splice(index, 1);
  return {...state, petShop: petShop, loading: false};
}

export const PetShopReducer = createReducer(
  initialState,
  on(loadPetShop, (state) => ({ ...state, loading: true })),
  on(loadPetShopSuccess, (state, {petShop}) => ({ ...state, petShop, loading: false })),
  on(loadPetShopError, (state, {error}) => ({ ...state, error: error, loading: false })),
  on(buyPet, (state) => ({ ...state, loading: true })),
  on(buyPetSuccess, (state, {pet}) => removePetFromPetshop(state, pet)),
  on(buyPetError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
