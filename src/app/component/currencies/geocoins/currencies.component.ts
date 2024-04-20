import {Component, inject, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {GeoCoinsState} from "../../../store/reducers/geoCoinsReducers";
import {LoadingComponent} from "../../page/loading/loading.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    MatIcon
  ],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.css'
})
export class CurrenciesComponent{

  store = inject(Store)
  protected balances$:Observable<GeoCoinsState>
  @Input() collapsed!: boolean;

  constructor() {
    this.balances$ = this.store.select('geoCoins')
  }
}
