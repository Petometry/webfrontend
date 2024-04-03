import { Component } from '@angular/core';
import {PetService} from "../../service/petservice/pet.service";
import {PetShop} from "../../model/pet/petshop.service";
import {Pet} from "../../model/pet/pet";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-petsshop',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './petsshop.component.html',
  styleUrl: './petsshop.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetsshopComponent {
  protected petShop: PetShop;

  constructor(private petService:PetService) {
    this.petShop =  {} as PetShop
    petService.getPetShop().subscribe(petShop => this.petShop = petShop);
  }

  buyPet(event: MouseEvent) {

    let target = event.target as Element;
    this.petService.buypet((target.id as unknown as number)).subscribe(pet => this.processBoughtPet(pet))
  }

  processBoughtPet(pet:Pet){
    const index = this.petShop.pets.indexOf(pet)
    this.petShop.pets.splice(index, 1)
  }

  protected readonly JSON = JSON;
}
