import {createAction, props} from "@ngrx/store";
import {Activity} from "../model/activity/activity";

export const loadActivity = createAction('[Activity] Load Activity')
export const loadActivitySuccess = createAction('[Activity] Load Activity Success', props<{activity: Activity}>())
export const loadActivityError = createAction('[Activity] Load Activity Error', props<{error: string}>())
