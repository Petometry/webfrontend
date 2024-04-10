import {createAction, props} from "@ngrx/store";
import {Pet} from "../model/pet/pet";

export const loadPet = createAction('[Pet] Load Pet', props<{id: number}>())
export const loadPetSuccess = createAction('[Pet] Load Pet Success', props<{pet: Pet}>())
export const loadPetError = createAction('[Pet] Load Pet Error', props<{error: string}>())
