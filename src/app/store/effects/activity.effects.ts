import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {
  createActivity,
  deleteActivity,
  loadActivity,
  loadActivityError,
  loadActivitySuccess
} from "../actions/activity.actions";
import {ActivityService} from "../../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {
  collectForagingRewardSuccess,
  createForagingSuccess,
  deleteForagingSuccess,
  loadForaging, loadForagingSuccess
} from "../actions/foraging.actions";
import {ActivityModel} from "../../model/activity/activity.model";
import {
  collectWorkRewardSuccess,
  createWorkSuccess,
  deleteWorkSuccess,
  loadWork,
  loadWorkSuccess
} from "../actions/work.actions";
import {TypedAction} from "@ngrx/store/src/models";
import {WorkModel} from "../../model/activity/work.model";
import {ForagingModel} from "../../model/activity/foraging.model";

@Injectable()
export class ActivityEffects {

  constructor(private actions$: Actions, private activityService: ActivityService) {
  }

  loadActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActivity),
      mergeMap(() =>
        this.activityService.getCurrentActivity().pipe(map((activity) => loadActivitySuccess({activity})), catchError((error) => of(loadActivityError({error}))))
      ))
  )

  loadActivitySuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActivitySuccess),
      mergeMap((props) =>
        of(props).pipe(map((props) => this.mapLoadActivity(props.activity)))
      ))
  )

  loadActivitySuccessChangeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActivitySuccess),
      mergeMap((props) =>
        of(props).pipe(map((props) => this.mapChangeLoading(props.activity)))
      ))
  )

  private mapChangeLoading(activity: ActivityModel): TypedAction<any> | undefined {
    if (activity.type == "FORAGING") {
      return loadWorkSuccess({activity: {} as WorkModel});
    }
    if ("WORK" == activity.type){
      return loadForagingSuccess({activity: activity as ForagingModel})
    }
      return undefined
  }

  private mapLoadActivity(activity: ActivityModel): TypedAction<any> | undefined {
    if (activity.type == "WORK") {
      return loadWork();
    } else if (activity.type == "FORAGING"){
      return loadForaging()
    }else {
      return undefined
    }
  }

  createActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createForagingSuccess, createWorkSuccess),
      mergeMap((props) =>
        of(props.activity).pipe(map((activity) => createActivity({activity})))
      ))
  )

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteForagingSuccess, collectForagingRewardSuccess, deleteWorkSuccess, collectWorkRewardSuccess),
      mergeMap(() =>
        of(undefined).pipe(map(() => {
          deleteActivity();
        }))
      )
    )
  )
}
