import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {GeoCoinsState} from "../../../store/reducers/geoCoinsReducers";
import {LoadingComponent} from "../../page/loading/loading.component";
import {MatIcon} from "@angular/material/icon";
import {CurrencyComponent} from "../currency/currency.component";

@Component({
  selector: 'app-geocoins',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    MatIcon,
    CurrencyComponent
  ],
  templateUrl: './geocoins.component.html',
  styleUrl: './geocoins.component.css'
})
export class GeocoinsComponent {

  store = inject(Store)
  protected balances$: Observable<GeoCoinsState>

  constructor() {
    this.balances$ = this.store.select('geoCoins')
  }
}
