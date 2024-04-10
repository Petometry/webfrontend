export interface ActivityState {
activity: Activity;
loading: boolean;
error: string;
}
export const initialState: ActivityState = {
activity: {} as Activity,
loading: false,
error: ''
};
export const activityReducer = createReducer(
initialState,

on(ActivityActions.loadActivity, state => ({ ...state, loading: true })),

on(ActivityActions.loadActivitySuccess, (state, { activity }) =>({ ...state, activity, loading: false })),

on(ActivityActions.loadActivityFailure, (state, { error }) => ({ ...state, error, loading: false })),
  
on(ActivityActions.updateActivity, (state, { activity }) =>({ ...state, activity})),
);
