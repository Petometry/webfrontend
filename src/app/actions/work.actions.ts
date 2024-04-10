import {createAction, props} from "@ngrx/store";
import {Work} from "../model/activity/work";

export const loadWork = createAction('[Work] Load Work Activity')
export const loadWorkSuccess = createAction('[Work] Load Work Success', props<{work: Work}>())
export const loadWorkError = createAction('[Work] Load Work Error', props<{error: string}>())
export const createWork = createAction('[Work] Create Work Activity', props<{duration: number}>())
export const deleteWork = createAction('[Work] Delete Work Activity')
