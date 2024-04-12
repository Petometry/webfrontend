import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {loadBalances, loadBalancesError, loadBalancesSuccess} from "../actions/geocoins.actions";
import {CurrencyService} from "../../service/currencyservice/currency.service";
import {buyPetSuccess} from "../actions/petshop.actions";

@Injectable()
export class BalancesEffects {

  constructor(private actions$: Actions, private currencyService: CurrencyService) {
  }

  loadGeoCoins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBalances),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadBalancesSuccess({balances})), catchError((error) => of(loadBalancesError({error}))))
      ))
  )

  buyPet = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPetSuccess),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadBalancesSuccess({balances})), catchError((error) => of(loadBalancesError({error}))))
      ))
  )
}
