import {createReducer, on} from "@ngrx/store";
import {ForagingModel} from "../../model/activity/foraging.model";
import {
  collectForagingReward, collectForagingRewardError, collectForagingRewardSuccess,
  createForaging, createForagingError, createForagingSuccess,
  deleteForaging, deleteForagingError, deleteForagingSuccess,
  loadForaging,
  loadForagingError,
  loadForagingSuccess
} from "../actions/foraging.actions";

export interface ForagingState {
  foraging: ForagingModel | undefined,
  loading: boolean,
  error: string
}

export const initialState: ForagingState = {
  foraging: {} as ForagingModel,
  loading: true,
  error: ''
}
export const ForagingReducers = createReducer(
    initialState,
    on(loadForaging, (state) => ({...state, loading: true})),
    on(loadForagingSuccess, (state, {activity}) => ({...state, foraging : activity, loading: false})),
    on(loadForagingError, (state, {error}) => ({...state, error: error, loading: false})),

    on(createForaging, (state) => ({...state, loading: true})),
    on(createForagingSuccess, (state, {activity}) => ({...state, foraging: activity, loading: false})),
    on(createForagingError, (state, {error}) => ({...state, error: error, loading: false})),

    on(deleteForaging, collectForagingReward, (state) => ({...state, loading: true})),
    on(deleteForagingSuccess, collectForagingRewardSuccess, (state) => ({...state, foraging: undefined, loading: false})),
    on(deleteForagingError, collectForagingRewardError, (state, {error}) => ({...state, error: error, loading: false})),
  )
;
