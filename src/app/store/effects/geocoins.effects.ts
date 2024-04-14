import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {loadGeoCoins, loadGeoCoinsError, loadGeoCoinsSuccess} from "../actions/geocoins.actions";
import {CurrencyService} from "../../service/currencyservice/currency.service";
import {buyPetSuccess} from "../actions/petshop.actions";
import {collectWorkRewardSuccess} from "../actions/work.actions";

@Injectable()
export class GeocoinsEffects {

  constructor(private actions$: Actions, private currencyService: CurrencyService) {
  }

  loadGeoCoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGeoCoins),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadGeoCoinsSuccess({balances})), catchError((error) => of(loadGeoCoinsError({error}))))
      ))
  )

  buyPet = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPetSuccess),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadGeoCoinsSuccess({balances})), catchError((error) => of(loadGeoCoinsError({error}))))
      ))
  )

  collectWorkRewardSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(collectWorkRewardSuccess),
      mergeMap(() =>
        of(undefined).pipe(map(loadGeoCoins))
      ))
  )
}
