import {Component, inject} from '@angular/core';
import {NgStyle} from "@angular/common";
import {PetComponent} from "../../component/pets/pet/pet.component";
import {PetshopComponent} from "../../component/pets/petshop/petshop.component";
import {Store} from "@ngrx/store";
import {loadPetShop} from "../../store/actions/petshop.actions";

@Component({
  selector: 'app-petshop-screen',
  standalone: true,
  imports: [
    NgStyle,
    PetComponent,
    PetshopComponent
  ],
  templateUrl: './pet-shop-screen.component.html',
  styleUrl: './pet-shop-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetShopScreenComponent {

  store = inject(Store)
  constructor() {
    this.store.dispatch(loadPetShop())
  }
}
