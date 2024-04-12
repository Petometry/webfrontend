import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadActivity} from "../actions/activity.actions";
import {ActivityService} from "../../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {
  collectWorkReward, collectWorkRewardError,
  collectWorkRewardSuccess,
  createWork,
  deleteWork,
  loadWork,
  loadWorkError,
  loadWorkSuccess
} from "../actions/work.actions";

@Injectable()
export class WorkEffects {

  constructor(private actions$: Actions, private activityService: ActivityService) {
  }

  loadWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWork),
      mergeMap(() =>
        this.activityService.getWork().pipe(
          map((work) => {
            return loadWorkSuccess({work});
          })
          , catchError((error) => of(loadWorkError({error}))))
      ))
  )

  createWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createWork),
      mergeMap((props) =>
        this.activityService.startWork(props.duration).pipe(
          map((work) => {
            return loadWorkSuccess({work});
          })
          , catchError((error) => of(loadWorkError({error}))))
      )
    )
  )

  deleteWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteWork),
      mergeMap(() =>
        this.activityService.stopWork().pipe(
          map((work) => {
            return loadWorkSuccess({work});
          })
          , catchError((error) => of(loadWorkError({error}))))
      ))
  )

  loadWorkSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadWorkSuccess, loadWorkError),
      mergeMap(() =>
        of(undefined).pipe(map(loadActivity))
      ))
  )

  collectReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkReward),
      mergeMap((props) =>
        this.activityService.collectWork().pipe(
          map(collectWorkRewardSuccess)
          , catchError((error) => of(collectWorkRewardError({error}))))
      )
    )
  )

  collectRewardSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkRewardSuccess),
      mergeMap(() =>
        of(undefined).pipe(map(loadWork))
      ))
  )
}
