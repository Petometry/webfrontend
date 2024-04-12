import {createAction, props} from "@ngrx/store";
import {PetModel} from "../model/pet/pet.model";

export const loadPets = createAction('[Pets] Load Pets')
export const loadPetsSuccess = createAction('[Pets] Load Pets Success', props<{pets: PetModel[]}>())
export const loadPetsError = createAction('[Pets] Load Pets Error', props<{error: string}>())
