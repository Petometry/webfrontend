import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CurrenciesComponent} from "../currencies/geocoins/currencies.component";
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    CurrenciesComponent,
    MatDrawer
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit{
  @ViewChild("drawer")
  drawer: any;

  ngAfterViewInit(): void {
    if (window.innerWidth > 700){
      this.toggle()
    }
  }

  toggle() {
    this.drawer.toggle()
  }


}
