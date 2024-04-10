import {createReducer, on} from "@ngrx/store";
import {loadActivity, loadActivityError, loadActivitySuccess} from "../actions/activity.actions";
import {Activity} from "../model/activity/activity";

export interface ActivityState {
  activity: Activity|undefined,
  loading: boolean,
  error: string
}

export const initialState:ActivityState = {
  activity: {} as Activity,
  loading: true,
  error: ''
}
export const activityReducer = createReducer(
  initialState,
  on(loadActivity, (state) => ({ ...state, loading: true })),
  on(loadActivitySuccess, (state, {activity}) => ({ ...state, activity, loading: false })),
  on(loadActivityError, (state, {error}) => ({ ...state, error: error, loading: false })),
);
