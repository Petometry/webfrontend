import {createAction, props} from "@ngrx/store";
import {Pet} from "../model/pet/pet";

export const loadPets = createAction('[Pets] Load Pets')
export const loadPetsSuccess = createAction('[Pets] Load Pets Success', props<{pets: Pet[]}>())
export const loadPetsError = createAction('[Pets] Load Pets Error', props<{error: string}>())
