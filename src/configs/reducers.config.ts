import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activityReducer} from "../app/store/reducers/activity.reducers";
import {workReducer} from "../app/store/reducers/work.reducers";
import {petsReducer} from "../app/store/reducers/pets.reducers";
import {PetShopReducer} from "../app/store/reducers/petshop.reducers";
import {balancesReducers} from "../app/store/reducers/balances.reducers";
import {ForagingReducers} from "../app/store/reducers/foraging.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  activity: activityReducer,
  work: workReducer,
  pets: petsReducer,
  petShop: PetShopReducer,
  balances: balancesReducers,
  foraging: ForagingReducers
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
