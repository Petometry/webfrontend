import {Component, inject} from '@angular/core';
import {PetDetailsComponent} from "../../component/pets/petdetails/pet-details.component";
import {ActivatedRoute} from "@angular/router";
import {PetfoodsComponent} from "../../component/currencies/petfoods/petfoods.component";
import {Store} from "@ngrx/store";
import {loadPets} from "../../store/actions/pets.actions";

@Component({
  selector: 'app-pet-details-screen',
  standalone: true,
  imports: [
    PetDetailsComponent,
    PetfoodsComponent
  ],
  templateUrl: './pet-details-screen.component.html',
  styleUrl: './pet-details-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetDetailsScreenComponent {
  petId: number;
  store = inject(Store)
  constructor(private route: ActivatedRoute) {
    this.petId = 0;
    this. route.paramMap.subscribe(params => this.petId = params.get("petId") as unknown as number)
    this.store.dispatch(loadPets())
  }
}
