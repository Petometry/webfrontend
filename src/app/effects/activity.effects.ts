import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadActivity, loadActivityError, loadActivitySuccess} from "../actions/activity.actions";
import {ActivityService} from "../service/activityservice/activity.service";
import {catchError, map, mergeMap, of} from "rxjs";

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
}
