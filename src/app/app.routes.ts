import {Routes} from '@angular/router';
import {KeycloakGuard} from "./guard/keycloak.guard";
import {GamePageComponent} from "./pages/game-page/game-page.component";
import {PublicPageComponent} from "./pages/public-page/public-page.component";
import {PetsScreenComponent} from "./screens/petsscreen/pets-screen.component";
import {PetShopScreenComponent} from "./screens/petshopscreen/pet-shop-screen.component";
import {WorkScreenComponent} from "./screens/workscreen/work-screen.component";
import {TownScreenComponent} from "./screens/townscreen/town-screen.component";
import {PetDetailsScreenComponent} from "./screens/petdetailsscreen/pet-details-screen.component";
import {ForagingScreenComponent} from "./screens/foraging-screen/foraging-screen.component";

export const routes: Routes = [
  {path: 'public', component: PublicPageComponent},
  {
    path: 'game',
    component: GamePageComponent,
    canActivate: [KeycloakGuard],
    children: [
      {path: 'pets/:petId', component: PetDetailsScreenComponent},
      {path: 'pets', component: PetsScreenComponent},
      {path: 'petshop', component: PetShopScreenComponent},
      {path: 'work', component: WorkScreenComponent},
      {path: 'foraging', component: ForagingScreenComponent},
      {path: '**', component: TownScreenComponent}
    ]
  },
  {path: '**', redirectTo: '/game'},
];
