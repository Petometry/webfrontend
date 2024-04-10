import { createAction } from '@ngrx/store';

export const loadActivities = createAction('[Activity] Load Activies');
export const loadActivitiesSuccess = createAction('[Activity] Load Activies Success', props<{ activities: Activity[] }>());
export const loadActivitiesFailure = createAction('[Activity] Load Activies Failure', props<{ error: string }>());
export const updateActivity = createAction('[Activity] Update Activity', props<{ activity: Activity }>());
export const deleteActivity = createAction('[Activity] Delete Activity', props<void>());
