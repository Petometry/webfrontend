import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CurrenciesComponent} from "../currencies/geocoins/currencies.component";
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NgClass} from "@angular/common";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    CurrenciesComponent,
    MatDrawer,
    MatSidenav,
    NgClass,
    MatNavList,
    MatIcon,
    MatListItem
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;


  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false;
    } else {
      this.sidenav.open();
      this.isCollapsed = !this.isCollapsed;
    }
  }


}
