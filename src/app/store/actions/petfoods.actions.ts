import {createAction, props} from "@ngrx/store";
import {PetfoodsModel} from "../../model/currency/petfoods.model";

export const loadPetfoods = createAction('[Petfoods] Load Petfoods')
export const loadPetfoodsSuccess = createAction('[Petfoods] Load Petfoods Success', props<{petfoods: PetfoodsModel}>())
export const loadPetfoodsError = createAction('[Petfoods] Load Petfoods Error', props<{error: string}>())

// No backend from here
export const increasePetfoods = createAction('[Petfoods] Increase Petfoods', props<{petfoods: PetfoodsModel}>())
export const decreasePetfoods = createAction('[Petfoods] Decrease Petfoods', props<{petfoods: PetfoodsModel}>())
