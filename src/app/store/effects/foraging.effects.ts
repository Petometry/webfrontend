import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ActivityService} from "../../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {
  collectForagingReward,
  collectForagingRewardError,
  collectForagingRewardSuccess,
  createForaging,
  deleteForaging,
  deleteForagingError,
  deleteForagingSuccess,
  loadForaging,
  loadForagingError,
  loadForagingSuccess
} from "../actions/foraging.actions";


@Injectable()
export class ForagingEffects {

  constructor(private actions$: Actions, private activityService: ActivityService) {
  }

  loadForaging$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadForaging),
      mergeMap(() =>
        this.activityService.getForaging().pipe(
          map((foraging) => {
            loadForagingSuccess({foraging});
          })
          , catchError((error) => of(loadForagingError({error}))))
      ))
  )

  createForaging$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createForaging),
      mergeMap((props) =>
        this.activityService.startForaging(props.duration).pipe(
          map((foraging) => {
            loadForagingSuccess({foraging});
          })
          , catchError((error) => of(loadForagingError({error}))))
      )
    )
  )

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteForaging),
      mergeMap(() =>
        this.activityService.stopForaging().pipe(
          map(() => {
            deleteForagingSuccess();
          }), catchError((error) => of(deleteForagingError({error}))))
      )
    )
  )

  collectForagingReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectForagingReward),
      mergeMap(() =>
        this.activityService.collectForaging().pipe(
          map((reward) => {
            collectForagingRewardSuccess({reward});
          }), catchError((error) => of(collectForagingRewardError({error}))))
      )
    )
  )

}
