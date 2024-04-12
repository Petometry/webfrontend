import {createAction, props} from "@ngrx/store";
import {WorkModel} from "../../model/activity/work.model";

export const loadWork = createAction('[WorkModel] Load WorkModel')
export const loadWorkSuccess = createAction('[WorkModel] Load WorkModel Success', props<{work: WorkModel}>())
export const loadWorkError = createAction('[WorkModel] Load WorkModel Error', props<{error: string}>())
export const createWork = createAction('[WorkModel] Create WorkModel', props<{duration: number}>())
export const deleteWork = createAction('[WorkModel] Delete WorkModel')
export const collectWorkReward = createAction('[WorkModel] Collect Reward')
export const collectWorkRewardSuccess = createAction('[WorkModel] Collect Reward Success')
export const collectWorkRewardError = createAction('[WorkModel] Collect Reward Error', props<{error: string}>())
