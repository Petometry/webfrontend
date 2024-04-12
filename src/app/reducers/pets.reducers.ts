import {createReducer, on} from "@ngrx/store";
import {PetModel} from "../model/pet/pet.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {loadPets, loadPetsError, loadPetsSuccess} from "../actions/pets.actions";
import {buyPetSuccess} from "../actions/petshop.actions";

export interface PetsState extends EntityState<PetModel> {
  loading: boolean,
  error: string
}

export function selectPetId(a: PetModel): number {
  //In this case this would be optional since primary key is id
  return a.id;
}

export const adapter: EntityAdapter<PetModel> = createEntityAdapter<PetModel>();

export const initialState: PetsState = adapter.getInitialState({
  loading: true,
  error: ''
});

export const petsReducer = createReducer(
  initialState,
  on(loadPets, (state) => ({...state, loading: true})),
  on(loadPetsSuccess, (state, {pets}) => {
    return adapter.addMany(pets, {...state, loading: false, error: ''})
  }),
  on(loadPetsError, (state, {error}) => ({...state, error: error, loading: false})),
  on(buyPetSuccess, (state, {pet}) => {
    return adapter.addOne(pet, {...state})
  }),
);
