import { Component } from '@angular/core';
import {PetDetailsComponent} from "../../component/petdetails/pet-details.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details-screen',
  standalone: true,
  imports: [
    PetDetailsComponent
  ],
  templateUrl: './pet-details-screen.component.html',
  styleUrl: './pet-details-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetDetailsScreenComponent {
  petId: number;


  constructor(private route: ActivatedRoute) {
    this.petId = 0;
    this. route.paramMap.subscribe(params => this.petId = params.get("petId") as unknown as number)
  }
}
