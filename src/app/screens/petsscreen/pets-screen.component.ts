import {Component, inject} from '@angular/core';
import {PetsOverviewComponent} from "../../component/pets/pets-overview/pets-overview.component";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    PetsOverviewComponent,
  ],
  templateUrl: './pets-screen.component.html',
  styleUrl: './pets-screen.component.css',
  host: {
    class: 'game-screen'
  }
})
export class PetsScreenComponent {

  store = inject(Store)
}
