import {Component} from '@angular/core';
import {PetService} from "../../service/petservice/pet.service";
import {PetShop} from "../../model/pet/petshop.service";
import {Pet} from "../../model/pet/pet";
import {NgStyle} from "@angular/common";
import {PetComponent} from "../../component/petcomponent/pet.component";

@Component({
  selector: 'app-petsshop',
  standalone: true,
  imports: [
    NgStyle,
    PetComponent
  ],
  templateUrl: './pet-shop-screen.component.html',
  styleUrl: './pet-shop-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetShopScreenComponent {
  protected petShop: PetShop;

  constructor(private petService: PetService) {
    this.petShop = {} as PetShop
    petService.getPetShop().subscribe(petShop => this.petShop = petShop);
  }

  buyPet(event: MouseEvent) {

    let target = event.target as Element;
    console.log(target)
    this.petService.buypet((target.id as unknown as number)).subscribe(pet => this.processBoughtPet(pet))
  }

  processBoughtPet(pet: Pet) {
    let index = -1;
    for (let i = 0; i < this.petShop.pets.length; i++) {
      if (pet.id == this.petShop.pets[i].id) {
        index = i
        break;
      }
    }

    console.log(index)
    if (index == -1) {
      this.petService.getPetShop().subscribe(petshop => this.petShop = petshop)
      return
    }
    this.petShop.pets.splice(index, 1)
  }
}
