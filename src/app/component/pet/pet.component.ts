import {Component, input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Petoverview} from "../../model/pet/petoverview";

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css'
})
export class PetComponent {

  pet = input.required<Petoverview>();

  triangleGradient(petoverview: Petoverview) {

    return "background-image:linear-gradient(to bottom right, transparent 50%, "+ petoverview.appearance.color + " 0),linear-gradient(to top right, "+ petoverview.appearance.color + " 50%, transparent 0);"
  }
}
