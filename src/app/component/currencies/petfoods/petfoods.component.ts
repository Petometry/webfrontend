import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PetfoodsState} from "../../../store/reducers/petfoods.reducers";
import {AsyncPipe} from "@angular/common";
import {LoadingComponent} from "../../page/loading/loading.component";
import {MatIcon} from "@angular/material/icon";
import {CurrencyComponent} from "../currency/currency.component";

@Component({
  selector: 'app-petfoods',
  standalone: true,
    imports: [
        AsyncPipe,
        LoadingComponent,
        MatIcon,
        CurrencyComponent
    ],
  templateUrl: './petfoods.component.html',
  styleUrl: './petfoods.component.css'
})
export class PetfoodsComponent {

store = inject(Store)
   petFoods$: Observable<PetfoodsState>;
    isCollapsed = input(false);
  constructor() {
  this.petFoods$ = this.store.select("petFoods")
  }
}
