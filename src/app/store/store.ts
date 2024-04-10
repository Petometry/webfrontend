export interface AppState {
  activity: ActivityState
}

export interface AppStore {
  activity: ActionReducer<ActivityState, Action>;
}

export const appStore: AppStore = {
  activity: ActivityReducer
}

export const appEffects = [ActivityEffects];
