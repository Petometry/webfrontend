import {Component} from '@angular/core';
import {PetService} from "../../service/petservice/pet.service";
import {Pet} from "../../model/pet/pet";
import {NgStyle} from "@angular/common";
import {PetoverviewComponent} from "../petoverview/petoverview.component";

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    NgStyle,
    PetoverviewComponent
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetsComponent {

  protected pets: Pet[];

  constructor(private petService: PetService) {
    this.pets = []
    petService.getUserPets().subscribe(pets => this.pets = pets)
  }

  protected readonly JSON = JSON;
}
