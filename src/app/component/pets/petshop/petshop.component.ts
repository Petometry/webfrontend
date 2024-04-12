import {Component, inject} from '@angular/core';
import {PetService} from "../../../service/petservice/pet.service";
import {PetComponent} from "../pet/pet.component";
import {LoadingComponent} from "../../loading/loading.component";
import {Store} from "@ngrx/store";
import {loadPetShop} from "../../../actions/petshop.actions";
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
  constructor(private petService: PetService) {
    this.store.dispatch(loadPetShop());
    this.petShop$ = this.store.select('petShop');
  }

  buyPet(event: MouseEvent) {

    let target = event.target as Element;
    this.petService.createPet((target.id as unknown as number)).subscribe(() => this.store.dispatch(loadPetShop()))
  }
}
