import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {CurrenciesComponent} from "../../component/currencies/geocoins/currencies.component";
import {NgClass} from "@angular/common";
import {BreakpointObserver} from "@angular/cdk/layout";
import {FooterComponent} from "../../component/page/footer/footer.component";
import {HeaderComponent} from "../../component/page/header/header.component";
import {SidebarComponent} from "../../component/page/sidebar/sidebar.component";

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    CurrenciesComponent,
    MatSidenavContainer,
    NgClass,
    MatSidenavContent,
    MatSidenav,
    FooterComponent,
    HeaderComponent
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
      this.isMobile = screenSize.matches;
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

  sideBarToggle() {
    if (this.isMobile){
      this.toggleMenu()
    }
  }
}
