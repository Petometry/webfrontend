import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebarcomponent/sidebar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
  host:
    {
      class: 'full-height'
    }
})
export class GamePageComponent {

}
