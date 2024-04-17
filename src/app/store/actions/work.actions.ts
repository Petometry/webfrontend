import {createAction, props} from "@ngrx/store";
import {WorkModel} from "../../model/activity/work.model";

// Load Work
export const loadWork = createAction('[Work] Load Work')
export const loadWorkSuccess = createAction('[Work] Load Work Success', props<{ activity: WorkModel }>())
export const loadWorkError = createAction('[Work] Load Work Error', props<{ error: string }>())

// Create Wor
export const createWork = createAction('[Work] Create Work', props<{ work: WorkModel }>())
export const createWorkSuccess = createAction('[Work] Create Work Success', props<{ activity: WorkModel }>())
export const createWorkError = createAction('[Work] Create Work Success', props<{ error: string }>())

// Delete Work
export const deleteWork = createAction('[Work] Delete Work')
export const deleteWorkSuccess = createAction('[Work] Delete Work Success')
export const deleteWorkError = createAction('[Work] Delete Work Error', props<{ error: string }>())

// Collect Work
export const collectWorkReward = createAction('[Work] Collect Work Reward')
export const collectWorkRewardSuccess = createAction('[Work] Collect Work Reward Success', props<{ work: WorkModel }>())
export const collectWorkRewardError = createAction('[Work] Collect Work Reward Error', props<{ error: string }>())

