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
import {collectForagingRewardSuccess, createForagingSuccess, deleteForagingSuccess} from "../actions/foraging.actions";
import {collectWorkRewardSuccess, createWorkSuccess, deleteWorkSuccess} from "../actions/work.actions";

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
        of(undefined).pipe(map(() =>
          deleteActivity()
        ))
      )
    )
  )
}
