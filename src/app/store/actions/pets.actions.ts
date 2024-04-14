import {createAction, props} from "@ngrx/store";
import {PetModel} from "../../model/pet/pet.model";
import {PetfeedingModel} from "../../model/pet/petfeeding.model";

export const loadPets = createAction('[Pets] Load Pets')
export const loadPetsSuccess = createAction('[Pets] Load Pets Success', props<{ pets: PetModel[] }>())
export const loadPetsError = createAction('[Pets] Load Pets Error', props<{ error: string }>())

// Free Pet
export const freePet = createAction('[Pets] Free Pet')
export const freePetSuccess = createAction('[Pets] Free Pet Success', props<{ pet: PetModel }>())
export const freePetError = createAction('[Pets] Free Pet Error', props<{ error: string }>())

// Feed Pet
export const feedPet = createAction('[Pets] Feed Pet')
export const feedPetSuccess = createAction('[Pets] Feed Pet Success', props<{ feeding: PetfeedingModel }>())
export const feedPetError = createAction('[Pets] Feed Pet Error', props<{ error: string }>())

//No Backend from here
export const addPet = createAction('[Pets] Add Pet', props<{ pet: PetModel }>())
