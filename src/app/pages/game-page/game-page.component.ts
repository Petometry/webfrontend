import {Component, ViewChild} from '@angular/core';
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
import {FooterComponent} from "../../component/page/footer/footer.component";
import {HeaderComponent} from "../../component/page/header/header.component";
import {SidebarComponent} from "../../component/page/sidebar/sidebar.component";

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
}
