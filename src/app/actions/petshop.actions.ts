import {createAction, props} from "@ngrx/store";
import {PetShopModel} from "../model/pet/petshop.model";


export const loadPetShop = createAction('[PetShop] Load PetShop')
export const loadPetShopSuccess = createAction('[PetShop] Load PetShop Success', props<{petShop: PetShopModel}>())
export const loadPetShopError = createAction('[PetShop] Load PetShop Error', props<{error: string}>())
