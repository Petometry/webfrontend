import {Component, inject} from '@angular/core';
import {PetComponent} from "../pet/pet.component";
import {LoadingComponent} from "../../page/loading/loading.component";
import {Store} from "@ngrx/store";
import {buyPet} from "../../../store/actions/petshop.actions";
import {Observable} from "rxjs";
import {PetShopState} from "../../../store/reducers/petshop.reducers";
import {AsyncPipe} from "@angular/common";
import {PetModel} from "../../../model/pet/pet.model";

@Component({
  selector: 'app-petshop',
  standalone: true,
  imports: [
    PetComponent,AsyncPipe,
    LoadingComponent
  ],
  templateUrl: './petshop.component.html',
  styleUrl: './petshop.component.css'
})
export class PetshopComponent{
  store = inject(Store)
  petShop$: Observable<PetShopState>;
  constructor() {
    this.petShop$ = this.store.select('petShop');
  }

  buyPet(pet: PetModel) {
    this.store.dispatch(buyPet({petId: pet.id}))
  }
}
