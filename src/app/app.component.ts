import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PetComponent} from "./component/pets/pet/pet.component";
import {Store} from "@ngrx/store";
import {loadWork} from "./actions/work.actions";
import {loadPets} from "./actions/pets.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, PetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'frontend';
  pet = {id: 10, appearance: {geometry: "triangle", color: "#121212"}}


  constructor(private store: Store ) {
    this.initializeStore()
  }

  initializeStore() {
    this.store.dispatch(loadWork())
    this.store.dispatch(loadPets())
  }


}
