import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {loadGeocoins, loadGeocoinsError, loadGeocoinsSuccess} from "../actions/geocoins.actions";
import {CurrencyService} from "../../service/currencyservice/currency.service";
import {buyPetSuccess} from "../actions/petshop.actions";

@Injectable()
export class GeocoinsEffects {

  constructor(private actions$: Actions, private currencyService: CurrencyService) {
  }

  loadGeoCoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGeocoins),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadGeocoinsSuccess({amount: balances.geocoin})), catchError((error) => of(loadGeocoinsError({error}))))
      ))
  )

  buyPet = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPetSuccess),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadGeocoinsSuccess({amount: balances.geocoin})), catchError((error) => of(loadGeocoinsError({error}))))
      ))
  )
}
