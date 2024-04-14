import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activityReducer} from "../app/store/reducers/activity.reducers";
import {workReducer} from "../app/store/reducers/work.reducers";
import {petsReducer} from "../app/store/reducers/pets.reducers";
import {PetShopReducer} from "../app/store/reducers/petshop.reducers";
import {geoCoinsReducers} from "../app/store/reducers/geoCoinsReducers";
import {ForagingReducers} from "../app/store/reducers/foraging.reducers";
import {petFoodsReducers} from "../app/store/reducers/petfoods.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  activity: activityReducer,
  work: workReducer,
  geoCoins: geoCoinsReducers,
  petShop: PetShopReducer,
  pets: petsReducer,
  petFoods: petFoodsReducers,
  foraging: ForagingReducers
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
