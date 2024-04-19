import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PetfoodsState} from "../../../store/reducers/petfoods.reducers";
import {AsyncPipe} from "@angular/common";
import {LoadingComponent} from "../../loading/loading.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-petfoods',
  standalone: true,
  imports: [
    AsyncPipe,
    LoadingComponent,
    MatIcon
  ],
  templateUrl: './petfoods.component.html',
  styleUrl: './petfoods.component.css'
})
export class PetfoodsComponent {

store = inject(Store)
   petFoods$: Observable<PetfoodsState>;
  constructor() {
  this.petFoods$ = this.store.select("petFoods")
  }
}
