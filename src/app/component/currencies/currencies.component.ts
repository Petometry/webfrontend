import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {loadBalances} from "../../store/actions/geocoins.actions";
import {BalancesState} from "../../store/reducers/balancesReducers";

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.css'
})
export class CurrenciesComponent{

  store = inject(Store)
  protected balances$:Observable<BalancesState>

  constructor() {
    this.balances$ = this.store.select('balances')
    this.store.dispatch(loadBalances())
  }
}
