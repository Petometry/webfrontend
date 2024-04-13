import {Component} from '@angular/core';
import {NgStyle} from "@angular/common";
import {PetComponent} from "../../component/pets/pet/pet.component";
import {PetshopComponent} from "../../component/pets/petshop/petshop.component";

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
  constructor() {}
}
