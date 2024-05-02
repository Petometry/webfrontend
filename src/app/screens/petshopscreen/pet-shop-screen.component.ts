import {Component, inject, OnInit} from '@angular/core';
import {PetshopComponent} from "../../component/pets/petshop/petshop.component";
import {Store} from "@ngrx/store";
import {loadPetShop} from "../../store/actions/petshop.actions";

@Component({
  selector: 'app-petshop-screen',
  standalone: true,
  imports: [
    PetshopComponent
  ],
  templateUrl: './pet-shop-screen.component.html',
  styleUrl: './pet-shop-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetShopScreenComponent implements OnInit {

  store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(loadPetShop())
  }
}
