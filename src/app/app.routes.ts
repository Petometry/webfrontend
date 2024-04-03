import {Routes} from '@angular/router';
import {KeycloakGuard} from "./guard/keycloak.guard";
import {GamePageComponent} from "./pages/game-page/game-page.component";
import {PublicPageComponent} from "./pages/public-page/public-page.component";
import {PetsComponent} from "./component/pets/pets.component";
import {PetsshopComponent} from "./component/petsshop/petsshop.component";
import {WorkplaceComponent} from "./component/workplace/workplace.component";
import {TownComponent} from "./component/town/town.component";

export const routes: Routes = [
  {path: 'public', component: PublicPageComponent},
  {
    path: 'game',
    component: GamePageComponent,
    canActivate: [KeycloakGuard],
    children: [
      {path: 'pets', component: PetsComponent},
      {path: 'petshop', component: PetsshopComponent},
      {path: 'work', component: WorkplaceComponent},
      {path: '**', component: TownComponent}
    ]
  },
  {path: '**', redirectTo: '/game'},
];
