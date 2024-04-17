import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ActivityService} from "../../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {
  collectForagingReward,
  collectForagingRewardError,
  collectForagingRewardSuccess,
  createForaging,
  createForagingError,
  createForagingSuccess,
  deleteForaging,
  deleteForagingError,
  deleteForagingSuccess,
  loadForaging,
  loadForagingError,
  loadForagingSuccess
} from "../actions/foraging.actions";
import {increasePetfoods} from "../actions/petfoods.actions";
import {
  collectWorkReward, collectWorkRewardSuccess,
  createWork,
  createWorkError,
  createWorkSuccess,
  deleteWork, deleteWorkError, deleteWorkSuccess,
  loadWorkError,
  loadWorkSuccess
} from "../actions/work.actions";
import {increaseGeoCoins} from "../actions/geocoins.actions";

@Injectable()
export class WorkEffects {

  constructor(private actions$: Actions, private activityService: ActivityService) {
  }

  loadWork$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadForaging),
      mergeMap(() =>
        this.activityService.getWork().pipe(
          map((work) => {
            loadWorkSuccess({activity: work});
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
            createWorkSuccess({activity});
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
            deleteWorkSuccess();
          }), catchError((error) => of(deleteWorkError({error}))))
      )
    )
  )

  collectForagingReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkReward),
      mergeMap(() =>
        this.activityService.collectWork().pipe(
          map((reward) => {
            collectWorkRewardSuccess({reward});
          }), catchError((error) => of(collectForagingRewardError({error}))))
      )
    )
  )

  collectForagingRewardSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkRewardSuccess),
      mergeMap((props) =>
        of(props.reward).pipe(
          map((reward) => {
            increaseGeoCoins({geocoins: reward});
          }))
      )
    )
  )
}
