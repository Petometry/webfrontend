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

function buypet(state:PetShopState, pet: PetModel) {
  let petShop = state.petShop!
  if (petShop == undefined){
    return {...state, petShop: petShop, loading: false};
  }
  let pets = petShop.pets
  const index = pets.indexOf(pet, 0);
  pets.splice(index, 1);
  return {...state, petShop: petShop, loading: false};
}

export const PetShopReducer = createReducer(
  initialState,
  on(loadPetShop, (state) => ({ ...state, loading: true })),
  on(loadPetShopSuccess, (state, {petShop}) => ({ ...state, petShop, loading: false })),
  on(loadPetShopError, (state, {error}) => ({ ...state, error: error, loading: false })),
  on(buyPet, (state) => ({ ...state, loading: true })),
  on(buyPetSuccess, (state, {pet}) => buypet(state, pet)),
  on(buyPetError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
