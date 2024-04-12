import {Component, inject} from '@angular/core';
import {PetService} from "../../../service/petservice/pet.service";
import {PetComponent} from "../pet/pet.component";
import {LoadingComponent} from "../../loading/loading.component";
import {Store} from "@ngrx/store";
import {buyPet, loadPetShop} from "../../../actions/petshop.actions";
import {Observable} from "rxjs";
import {PetShopState} from "../../../reducers/petshop.reducers";
import {AsyncPipe} from "@angular/common";

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
    this.store.dispatch(loadPetShop());
    this.petShop$ = this.store.select('petShop');
  }

  buyPet(event: MouseEvent) {

    let target = event.target as Element;
    this.store.dispatch(buyPet({petId: target.id as unknown as number}))
  }
}
