import {Component, OnInit} from '@angular/core';
import {PetShop} from "../../model/pet/petshop.service";
import {PetService} from "../../service/petservice/pet.service";
import {Petoverview} from "../../model/pet/petoverview";
import {PetComponent} from "../pet/pet.component";
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-petshop',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent
  ],
  templateUrl: './petshop.component.html',
  styleUrl: './petshop.component.css'
})
export class PetshopComponent implements OnInit {
  protected petShop: PetShop | undefined;

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getPetShop().subscribe(petShop => this.petShop = petShop);
  }

  buyPet(event: MouseEvent) {

    let target = event.target as Element;
    this.petService.buypet((target.id as unknown as number)).subscribe(pet => this.processBoughtPet(pet))
  }

  processBoughtPet(pet: Petoverview) {
    if (this.petShop == undefined){
      return
    }
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
