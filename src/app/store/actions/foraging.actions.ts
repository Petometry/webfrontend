import {createAction, props} from "@ngrx/store";
import {PetfoodsModel} from "../../model/currency/petfoods.model";
import {ForagingModel} from "../../model/activity/foraging.model";

//  Load
export const loadForaging = createAction('[Foraging] Load Foraging')
export const loadForagingSuccess = createAction('[Foraging] Load Foraging Success', props<{
  activity: ForagingModel
}>())
export const loadForagingError = createAction('[Foraging] Load Foraging Error', props<{ error: string }>())

//Create Foraging
export const createForaging = createAction('[Foraging] Create Foraging', props<{ duration: number }>())
export const createForagingSuccess = createAction('[Foraging] Create Foraging Success', props<{ activity: ForagingModel }>())
export const createForagingError = createAction('[Foraging] Create Foraging Error', props<{ error: string }>())

// Delete Foraging
export const deleteForaging = createAction('[Foraging] Delete Foraging')
export const deleteForagingSuccess = createAction('[Foraging] Delete Foraging Success')
export const deleteForagingError = createAction('[Foraging] Delete Foraging Error', props<{ error: string }>())

// @formatter:off
// Collect Foraging Reward
export const collectForagingReward = createAction('[Foraging] Collect Foraging Reward')
export const collectForagingRewardSuccess = createAction('[Foraging] Collect Foraging Reward Success', props<{ reward: PetfoodsModel }>())
export const collectForagingRewardError = createAction('[Foraging] Collect Foraging Reward Error', props<{ error: string }>())
// @formatter:on
