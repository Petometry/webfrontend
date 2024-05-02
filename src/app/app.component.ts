import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PetComponent} from "./component/pets/pet/pet.component";
import {Store} from "@ngrx/store";
import {loadPets} from "./store/actions/pets.actions";
import {loadGeoCoins} from "./store/actions/geocoins.actions";
import {loadPetShop} from "./store/actions/petshop.actions";
import {loadActivity} from "./store/actions/activity.actions";
import {loadPetfoods} from "./store/actions/petfoods.actions";
import {KeycloakEventType, KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, PetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Petometry';


  constructor(private store: Store, private keycloak: KeycloakService) {
    this.initializeStore()
    this.keycloak.keycloakEvents$.subscribe({
      next(event) {
        if (event.type == KeycloakEventType.OnTokenExpired){
          keycloak.updateToken(20)
        }
      }
    })
  }

  initializeStore() {

    this.store.dispatch(loadActivity())
    this.store.dispatch(loadPets())
    this.store.dispatch(loadGeoCoins())
    this.store.dispatch(loadPetShop())
    this.store.dispatch(loadPetfoods())
  }


}
