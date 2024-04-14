import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {loadGeoCoinsError, loadGeoCoinsSuccess} from "../actions/geocoins.actions";
import {CurrencyService} from "../../service/currencyservice/currency.service";
import {buyPetSuccess} from "../actions/petshop.actions";
import {loadPetfoods, loadPetfoodsError, loadPetfoodsSuccess} from "../actions/petfoods.actions";
import {collectForagingRewardSuccess} from "../actions/foraging.actions";

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

  feedPet = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPetSuccess),
      mergeMap(() =>
        this.currencyService.getCurrencies().pipe(map((balances) => loadGeoCoinsSuccess({balances})), catchError((error) => of(loadGeoCoinsError({error}))))
      ))
  )

  collectForagingSuccess = createEffect(() =>
    this.actions$.pipe(
      ofType(collectForagingRewardSuccess),
      mergeMap(() =>
        of(undefined).pipe(map(loadPetfoods))
      ))
  )
}
