import {Component, inject} from '@angular/core';
import {PetService} from "../../service/petservice/pet.service";
import {PetComponent} from "../pet/pet.component";
import {Router} from "@angular/router";
import {LoadingComponent} from "../loading/loading.component";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {PetsState} from "../../reducers/pets.reducers";

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
export class PetsOverviewComponent{

  pets$: Observable<PetsState>

  store = inject(Store)

  constructor(private petService: PetService, private router: Router) {
    this.pets$ = this.store.select('pets')
  }

  showPetDetails(event: MouseEvent){
    let target = event.target as Element;
  this.router.navigateByUrl("/game/pets/" + target.id)
  }
}
