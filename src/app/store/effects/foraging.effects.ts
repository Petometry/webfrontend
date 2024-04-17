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
import {loadActivitySuccess} from "../actions/activity.actions";


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
            return loadForagingSuccess({activity: foraging});
          })
          , catchError((error) => of(loadForagingError({error}))))
      ))
  )

  createForaging$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createForaging),
      mergeMap((props) =>
        this.activityService.startForaging(props.duration).pipe(
          map((activity) => {
            return createForagingSuccess({activity});
          })
          , catchError((error) => of(createForagingError({error}))))
      )
    )
  )

  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteForaging),
      mergeMap(() =>
        this.activityService.stopForaging().pipe(
          map(() => {
            return deleteForagingSuccess();
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
            return collectForagingRewardSuccess({reward});
          }), catchError((error) => of(collectForagingRewardError({error}))))
      )
    )
  )

  collectForagingRewardSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectForagingRewardSuccess),
      mergeMap((props) =>
        of(props.reward).pipe(
          map((reward) => {
            return increasePetfoods({petfoods: reward});
          }))
      )
    )
  )

  loadActivitySuccessChangeLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadActivitySuccess),
      mergeMap((props) =>
        of(props).pipe(map((props) => {
          if (props.activity == null || props.activity.type != "FORAGING") {
            return loadForagingSuccess({activity: undefined})
          }
          return loadForaging()
        }))
      ))
  )

}
