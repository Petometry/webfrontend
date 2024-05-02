import {Component, inject} from '@angular/core';
import {PetComponent} from "../pet/pet.component";
import {Router} from "@angular/router";
import {LoadingComponent} from "../../page/loading/loading.component";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {PetsState} from "../../../store/reducers/pets.reducers";
import {PetModel} from "../../../model/pet/pet.model";

@Component({
  selector: 'app-pets-overview',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent,
    AsyncPipe
  ],
  templateUrl: './pets-overview.component.html',
  styleUrl: './pets-overview.component.css'
})
export class PetsOverviewComponent {

  pets$: Observable<PetsState>
  store = inject(Store)

  constructor(private router: Router) {
    this.pets$ = this.store.select('pets')
  }

  showPetDetails(pet: PetModel) {
    this.router.navigateByUrl("/game/pets/" + pet.id)
  }
}
