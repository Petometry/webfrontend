import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CurrenciesComponent} from "../currencies/currencies.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    CurrenciesComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
