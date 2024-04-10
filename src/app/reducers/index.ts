import {isDevMode} from '@angular/core';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activityReducer} from "./activity.reducers";
import {workReducer} from "./work.reducers";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  activity: activityReducer,
  work: workReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
