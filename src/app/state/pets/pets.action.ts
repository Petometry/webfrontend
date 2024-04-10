import { createAction, props } from '@ngrx/store';
import { PetOverview } from "../../models/pet/petoverview";

export const add = createAction('[PetOverview] Add',  props<{ pet: PetOverview }>());
export const remove = createAction('[PetOverview] Remove', props<{ pet: PetOverview }>());
export const updateAllState = createAction('[PetOverview] Update all state of Pets', props<{ products: PetOverview[] }>());
export const clear = createAction('[PetOverview] Clear');
