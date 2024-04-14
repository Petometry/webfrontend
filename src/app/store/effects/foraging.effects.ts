import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadActivity} from "../actions/activity.actions";
import {ActivityService} from "../../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";
import {
  collectForagingReward,
  collectForagingRewardError,
  collectForagingRewardSuccess,
  createForaging,
  deleteForaging,
  loadForaging,
  loadForagingError,
  loadForagingSuccess
} from "../actions/foraging.actions";
import {feedPetSuccess} from "../actions/pets.actions";
import {loadPetfoods} from "../actions/petfoods.actions";


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
            return loadForagingSuccess({foraging});
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
            return loadForagingSuccess({foraging});
          })
          , catchError((error) => of(loadForagingError({error}))))
      )
    )
  )

  deleteForaging$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteForaging),
      mergeMap(() =>
        this.activityService.stopForaging().pipe(
          map((foraging) => {
            return loadForagingSuccess({foraging});
          })
          , catchError((error) => of(loadForagingError({error}))))
      ))
  )

  loadForagingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadForagingSuccess, loadForagingError),
      mergeMap(() =>
        of(undefined).pipe(map(loadActivity))
      ))
  )

  collectReward$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectForagingReward),
      mergeMap((props) =>
        this.activityService.collectForaging().pipe(
          map(collectForagingRewardSuccess)
          , catchError((error) => of(collectForagingRewardError({error}))))
      )
    )
  )

  collectRewardSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(collectForagingRewardSuccess),
      mergeMap(() =>
        of(undefined).pipe(map(loadForaging))
      ))
  )

  feedPetSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(feedPetSuccess),
      mergeMap(() =>
        of(undefined).pipe(map(loadPetfoods))
      ))
  )
}
