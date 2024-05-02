import {createReducer, on} from "@ngrx/store";
import {
  collectWorkReward, collectWorkRewardError,
  collectWorkRewardSuccess,
  createWork, createWorkError, createWorkSuccess,
  deleteWork, deleteWorkError, deleteWorkSuccess,
  loadWork,
  loadWorkError,
  loadWorkSuccess
} from "../actions/work.actions";
import {WorkModel} from "../../model/activity/work.model";

export interface WorkState {
  work: WorkModel | undefined,
  loading: boolean,
  error: string
}

export const initialState: WorkState = {
  work: {} as WorkModel,
  loading: true,
  error: ''
}
export const workReducer = createReducer(
    initialState,
    // Load Work
    on(loadWork, (state) => ({...state, loading: true})),
    on(loadWorkSuccess, (state, {activity}) => ({...state, work: activity, loading: false})),
    on(loadWorkError, (state, {error}) => ({...state, error: error, loading: false})),
    // Create work
    on(createWork, (state) => ({...state, loading: true})),
    on(createWorkSuccess, (state, {activity}) => ({...state, work: activity, loading: false})),
    on(createWorkError, (state, {error}) => ({...state, error: error, loading: false})),
    // Delete work AND Collect work reward
    on(deleteWork, collectWorkReward, (state) => ({...state, loading: true})),
    on(deleteWorkSuccess, collectWorkRewardSuccess, (state) => ({...state, work: undefined, loading: false})),
    on(deleteWorkError, collectWorkRewardError, (state, {error}) => ({...state, error: error, loading: false})),
  )
;
