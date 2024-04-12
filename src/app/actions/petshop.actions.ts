import {createAction, props} from "@ngrx/store";
import {PetShopModel} from "../model/pet/petshop.model";
import {PetModel} from "../model/pet/pet.model";


export const loadPetShop = createAction('[PetShop] Load PetShop')
export const loadPetShopSuccess = createAction('[PetShop] Load PetShop Success', props<{petShop: PetShopModel}>())
export const loadPetShopError = createAction('[PetShop] Load PetShop Error', props<{error: string}>())
export const buyPet = createAction('[PetShop] Buy PetShop', props<{petId: number}>())
export const buyPetSuccess = createAction('[PetShop] Buy PetShop Success', props<{pet: PetModel}>())
export const buyPetError = createAction('[PetShop] Buy PetShop Error', props<{error: string}>())
