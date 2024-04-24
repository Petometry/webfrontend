import { Component } from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
  host: {
    class: 'game-screen'
  }
})
export class LoadingComponent {

}
