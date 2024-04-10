import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activityReducer} from "./activity.reducers";
import {workReducer} from "./work.reducers";
import {petsReducer} from "./pets.reducers";
import {petReducer} from "./pet.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  activity: activityReducer,
  work: workReducer,
  pets: petsReducer,
  pet: petReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
