import {createReducer, on} from "@ngrx/store";
import {PetModel} from "../../model/pet/pet.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {
  addPet,
  feedPet,
  feedPetError,
  feedPetSuccess,
  freePet,
  freePetSuccess,
  loadPets,
  loadPetsError,
  loadPetsSuccess,
  removePet
} from "../actions/pets.actions";
import {PetfeedingModel} from "../../model/pet/petfeeding.model";

export interface PetsState extends EntityState<PetModel> {
  loading: boolean,
  error: string
}

export function selectPetId(pet: PetModel): number {
  //In this case this would be optional since primary key is id
  return pet.id;
}

export const adapter: EntityAdapter<PetModel> = createEntityAdapter<PetModel>();

export const initialState: PetsState = adapter.getInitialState({
  loading: true,
  error: ''
});

function updateHunger(feeding: PetfeedingModel, state: PetsState) {
  return adapter.updateOne({
    id: feeding.petId,
    changes: {...state.entities[feeding.petId], hunger: state.entities[feeding.petId]!.hunger + feeding.amount}
  }, {...state});
}

export const petsReducer = createReducer(
  initialState,
  // formatter:off
  on(loadPets, (state) => ({...state, loading: true})),
  on(loadPetsSuccess, (state, {pets}) => {
    return adapter.addMany(pets, {...state, loading: false})
  }),
  on(loadPetsError, (state, {error}) => ({...state, error: error, loading: false})),

  on(freePet, (state) => ({...state, loading: true})),
  on(removePet, freePetSuccess, (state, {petId}) => {
    return adapter.removeOne(petId, {...state})
  }),
  on(addPet, (state, {pet}) => {
    return adapter.addOne(pet, {...state})
  }),

  on(feedPet, (state) => ({...state, loading: true})),
  on(feedPetSuccess, (state, {feeding}) => {
    return updateHunger(feeding, state)
  }),
  on(feedPetError, (state, {error}) => ({...state, error: error, loading: false})),
);
