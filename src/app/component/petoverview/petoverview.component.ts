import {Component, input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Pet} from "../../model/pet/pet";

@Component({
  selector: 'app-petoverview',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './petoverview.component.html',
  styleUrl: './petoverview.component.css'
})
export class PetoverviewComponent {

  pet = input.required<Pet>();
}
