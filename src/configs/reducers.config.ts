import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activityReducer} from "../app/store/reducers/activity.reducers";
import {workReducer} from "../app/store/reducers/work.reducers";
import {petsReducer} from "../app/store/reducers/pets.reducers";
import {PetShopReducer} from "../app/store/reducers/petshop.reducers";
import {geocoinsReducers} from "../app/store/reducers/geocoins.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  activity: activityReducer,
  work: workReducer,
  pets: petsReducer,
  petShop: PetShopReducer,
  geocoins: geocoinsReducers
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
