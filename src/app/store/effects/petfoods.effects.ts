import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {CurrencyService} from "../../service/currencyservice/currency.service";
import {loadPetfoods, loadPetfoodsSuccess} from "../actions/petfoods.actions";
import {loadActivityError} from "../actions/activity.actions";

@Injectable()
export class PetFoodsEffects {

  constructor(private actions$: Actions, private currencyService: CurrencyService) {
  }

  loadPetFoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPetfoods),
      mergeMap(() =>
        this.currencyService.getPetfoods().pipe(map((petfoods) => loadPetfoodsSuccess({petfoods})), catchError((error) => of(loadActivityError({error}))))
      ))
  )

}
