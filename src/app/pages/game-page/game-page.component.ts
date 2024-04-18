import {Component, ViewChild} from '@angular/core';
import {SidebarComponent} from "../../component/sidebar/sidebar.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent
} from "@angular/material/sidenav";
import {CurrenciesComponent} from "../../component/currencies/geocoins/currencies.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";
import {BreakpointObserver} from "@angular/cdk/layout";

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
    NgOptimizedImage,
    MatToolbar,
    MatIcon,
    MatSidenavContainer,
    MatNavList,
    NgClass,
    MatIconButton,
    MatSidenavContent,
    MatListItem,
    MatSidenav
  ],
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css',
  host:
    {
      class: 'full-height'
    }
})
export class GamePageComponent {
  title = 'material-responsive-sidenav';
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
