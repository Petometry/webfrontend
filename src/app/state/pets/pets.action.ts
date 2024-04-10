import { createAction, props } from '@ngrx/store';
import { PetOverview } from "../../models/pet/petoverview";

export const add = createAction('[FavoriteProduct] Add',  props<{ product: FavoriteProduct }>());
export const remove = createAction('[FavoriteProduct] Remove', props<{ product: FavoriteProduct }>());
export const updateAllState = createAction('[FavoriteProduct] Update all state of favorites products', 
 props<{ products: FavoriteProduct[] }>());
export const clear = createAction('[FavoriteProduct] Clear');
