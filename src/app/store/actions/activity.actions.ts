import {createAction, props} from "@ngrx/store";
import {ActivityModel} from "../../model/activity/activity.model";

export const loadActivity = createAction('[Activity] Load Activity')
export const loadActivitySuccess = createAction('[Activity] Load Activity Success', props<{activity: ActivityModel}>())
export const loadActivityError = createAction('[Activity] Load Activity Error', props<{error: string}>())

//  No Backend from here
export const createActivity = createAction('[Activity] Create Activity Error', props<{activity: ActivityModel}>())
export const deleteActivity = createAction('[Activity] Delete Activity')
