import {Component} from '@angular/core';
import {PetService} from "../../service/petservice/pet.service";
import {Pet} from "../../model/pet/pet";
import {NgStyle} from "@angular/common";
import {PetComponent} from "../../component/petcomponent/pet.component";

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    NgStyle,
    PetComponent
  ],
  templateUrl: './pets-screen.component.html',
  styleUrl: './pets-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetsScreenComponent {

  protected pets: Pet[];

  constructor(private petService: PetService) {
    this.pets = []
    petService.getUserPets().subscribe(pets => this.pets = pets)
  }

  protected readonly JSON = JSON;
}
