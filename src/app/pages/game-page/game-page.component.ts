import { Component } from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {CurrenciesComponent} from "../../component/currencies/geocoins/currencies.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    MatButton,
    MatDrawer,
    MatDrawerContainer,
    CurrenciesComponent,
    RouterLink,
    NgOptimizedImage
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
