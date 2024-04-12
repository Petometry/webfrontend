import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {GeocoinsState} from "../../store/reducers/geocoins.reducers";
import {loadGeocoins} from "../../store/actions/geocoins.actions";

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
  protected geoCoins$:Observable<GeocoinsState>

  constructor() {
    this.geoCoins$ = this.store.select('geocoins')
    this.store.dispatch(loadGeocoins())
  }
}
