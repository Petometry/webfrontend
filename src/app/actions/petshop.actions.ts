import {createAction, props} from "@ngrx/store";
import {PetShop} from "../model/pet/petshop.service";


export const loadPetShop = createAction('[PetShop] Load PetShop')
export const loadPetShopSuccess = createAction('[PetShop] Load PetShop Success', props<{petShop: PetShop}>())
export const loadPetShopError = createAction('[PetShop] Load PetShop Error', props<{error: string}>())
