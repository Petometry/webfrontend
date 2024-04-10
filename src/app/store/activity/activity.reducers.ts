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

on(ActivityActions.loadActivity, (state, { activity }) =>({ ...state, activity, loading: false })),

on(ActivityActions.loadActivity, (state, { error }) => ({ ...state, error, loading: false })),

);
