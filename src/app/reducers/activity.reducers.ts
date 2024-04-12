import {createReducer, on} from "@ngrx/store";
import {loadActivity, loadActivityError, loadActivitySuccess} from "../actions/activity.actions";
import {ActivityModel} from "../model/activity/activity.model";

export interface ActivityState {
  activity: ActivityModel|undefined,
  loading: boolean,
  error: string
}

export const initialState:ActivityState = {
  activity: {} as ActivityModel,
  loading: true,
  error: ''
}
export const activityReducer = createReducer(
  initialState,
  on(loadActivity, (state) => ({ ...state, loading: true })),
  on(loadActivitySuccess, (state, {activity}) => ({ ...state, activity, loading: false })),
  on(loadActivityError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
