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

  let petShop = {...state.petShop!}
  let pets = [...petShop.pets]
  for (let i = 0; i < pets.length; i++) {
    if (pets[i].id == pet.id){
      pets.splice(i, 1);
      break
    }
  }
  petShop.pets = pets
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
