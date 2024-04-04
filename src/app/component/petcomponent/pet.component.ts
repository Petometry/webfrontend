import {Component, input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Pet} from "../../model/pet/pet";

@Component({
  selector: 'app-petoverview',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css'
})
export class PetComponent {

  pet = input.required<Pet>();
}
