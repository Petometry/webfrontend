import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PetComponent} from "./component/pets/pet/pet.component";
import {Store} from "@ngrx/store";
import {interval} from "rxjs";
import {loadWork} from "./store/actions/work.actions";
import {loadPets} from "./store/actions/pets.actions";
import {loadGeoCoins} from "./store/actions/geocoins.actions";
import {loadPetShop} from "./store/actions/petshop.actions";
import {loadForaging} from "./store/actions/foraging.actions";

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
    interval(300_000).subscribe(()=> this.initializeStore())
  }

  initializeStore() {
    this.store.dispatch(loadWork())
    this.store.dispatch(loadForaging())
    this.store.dispatch(loadPets())
    this.store.dispatch(loadGeoCoins())
    this.store.dispatch(loadPetShop())
  }


}
