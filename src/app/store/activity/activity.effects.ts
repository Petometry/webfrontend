@Injectable()
export class ActivityEffects {

  loadActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActivityActions.loadActivity),
      mergeMap(() =>
        this.ActivityService.getCurrentActivity().pipe(
          map((activity) => TodoActions.loadActivitySuccess({ activity })),
          catchError((error) =>
            of(TodoActions.loadActivityFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private activityService: ActivityService) {}
}
