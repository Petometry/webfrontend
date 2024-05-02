import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {loadGeoCoins, loadGeoCoinsError, loadGeoCoinsSuccess} from "../actions/geocoins.actions";
import {CurrencyService} from "../../service/currencyservice/currency.service";

@Injectable()
export class GeocoinsEffects {

  constructor(private actions$: Actions, private currencyService: CurrencyService) {
  }

  loadGeoCoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGeoCoins),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((geocoins) => loadGeoCoinsSuccess({geocoins})), catchError((error) => of(loadGeoCoinsError({error}))))
      ))
  )

}
