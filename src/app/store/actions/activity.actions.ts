import {createAction, props} from "@ngrx/store";
import {ActivityModel} from "../../model/activity/activity.model";

export const loadActivity = createAction('[ActivityModel] Load ActivityModel')
export const loadActivitySuccess = createAction('[ActivityModel] Load ActivityModel Success', props<{activity: ActivityModel}>())
export const loadActivityError = createAction('[ActivityModel] Load ActivityModel Error', props<{error: string}>())
