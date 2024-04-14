import {createReducer, on} from "@ngrx/store";
import {ForagingModel} from "../../model/activity/foraging.model";
import {
  collectForagingReward, collectForagingRewardError, collectForagingRewardSuccess,
  createForaging,
  deleteForaging,
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
    on(loadForagingSuccess, (state, {foraging}) => ({...state, foraging, loading: false})),
    on(loadForagingError, (state, {error}) => ({...state, error: error, loading: false})),
    on(deleteForaging, (state) => ({...state, foraging: {} as ForagingModel})),
    on(createForaging, (state) => ({...state, foraging: {} as ForagingModel})),
    on(collectForagingReward, (state) => ({...state, loading: true})),
    on(collectForagingRewardSuccess, (state) => ({...state, loading: false})),
    on(collectForagingRewardError, (state, {error}) => ({...state, error, loading: false})),
  )
;
