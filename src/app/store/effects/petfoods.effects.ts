import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {CurrencyService} from "../../service/currencyservice/currency.service";
import {loadPetfoods, loadPetfoodsError, loadPetfoodsSuccess} from "../actions/petfoods.actions";

@Injectable()
export class BalancesEffects {

  constructor(private actions$: Actions, private currencyService: CurrencyService) {
  }

  loadPetfoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPetfoods),
      mergeMap(() =>
        this.currencyService.getPetfoods().pipe(map((petfoods) => loadPetfoodsSuccess({petfoods})), catchError((error) => of(loadPetfoodsError({error}))))
      ))
  )

}
