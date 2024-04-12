import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activityReducer} from "./activity.reducers";
import {workReducer} from "./work.reducers";
import {petsReducer} from "./pets.reducers";
import {PetShopReducer} from "./petshop.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  activity: activityReducer,
  work: workReducer,
  pets: petsReducer,
  petShop: PetShopReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
