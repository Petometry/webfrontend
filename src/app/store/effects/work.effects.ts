import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ActivityService} from "../../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {
  collectWorkReward,
  collectWorkRewardError,
  collectWorkRewardSuccess,
  createWork,
  createWorkError,
  createWorkSuccess,
  deleteWork,
  deleteWorkError,
  deleteWorkSuccess,
  loadWork,
  loadWorkError,
  loadWorkSuccess
} from "../actions/work.actions";
import {increaseGeoCoins} from "../actions/geocoins.actions";
import {loadActivitySuccess} from "../actions/activity.actions";

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
            return loadWorkSuccess({activity: work});
          })
          , catchError((error) => of(loadWorkError({error}))))
      ))
  )

  createWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createWork),
      mergeMap((props) =>
        this.activityService.startWork(props.duration).pipe(
          map((activity) => {
            return createWorkSuccess({activity});
          })
          , catchError((error) => of(createWorkError({error}))))
      )
    )
  )

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteWork),
      mergeMap(() =>
        this.activityService.stopWork().pipe(
          map(() => {
            return deleteWorkSuccess();
          }), catchError((error) => of(deleteWorkError({error}))))
      )
    )
  )

  collectWorkReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkReward),
      mergeMap(() =>
        this.activityService.collectWork().pipe(
          map((reward) => {
            return collectWorkRewardSuccess({reward});
          }), catchError((error) => of(collectWorkRewardError({error}))))
      )
    )
  )

  collectWorkRewardSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkRewardSuccess),
      mergeMap((props) =>
        of(props.reward).pipe(
          map((reward) => {
            return increaseGeoCoins({geocoins: reward});
          }))
      )
    )
  )

  loadActivitySuccessChangeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActivitySuccess),
      mergeMap((props) =>
        of(props).pipe(map((props) => {
          if (props.activity == null || props.activity.type != "WORK") {
            return loadWorkSuccess({activity: undefined})
          }
          return loadWork()
        }))
      ))
  )
}
