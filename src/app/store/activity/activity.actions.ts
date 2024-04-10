import { createAction } from '@ngrx/store';

export const loadActivity = createAction('[Activity] Load Activity');
export const loadActivitySuccess = createAction('[Activity] Load Activity Success', props<{ activity: Activity }>());
export const loadActivityFailure = createAction('[Activity] Load Activity Failure', props<{ error: string }>());
