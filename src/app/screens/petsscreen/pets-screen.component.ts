import {Component} from '@angular/core';
import {NgStyle} from "@angular/common";
import {PetComponent} from "../../component/pet/pet.component";
import {PetsOverviewComponent} from "../../component/pets-overview/pets-overview.component";
import {PetDetailsComponent} from "../../component/petdetails/pet-details.component";

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    NgStyle,
    PetComponent,
    PetsOverviewComponent,
    PetDetailsComponent
  ],
  templateUrl: './pets-screen.component.html',
  styleUrl: './pets-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetsScreenComponent {

  constructor() {}
}
