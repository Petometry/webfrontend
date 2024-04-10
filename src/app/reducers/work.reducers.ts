import {createReducer, on} from "@ngrx/store";
import {createWork, deleteWork, loadWork, loadWorkError, loadWorkSuccess} from "../actions/work.actions";
import {Work} from "../model/activity/work";

export interface WorkState {
  work: Work | undefined,
  loading: boolean,
  error: string
}

export const initialState: WorkState = {
  work: {} as Work,
  loading: true,
  error: ''
}
export const workReducer = createReducer(
  initialState,
  on(loadWork, (state) => ({...state, loading: true})),
  on(loadWorkSuccess, (state, {work}) => ({...state, work, loading: false})),
  on(loadWorkError, (state, {error}) => ({...state, error: error, loading: false})),
  on(deleteWork, (state) => ({...state, work: {} as Work})),
  on(createWork, (state,{duration}) => ({...state, work: {} as Work}))
);
