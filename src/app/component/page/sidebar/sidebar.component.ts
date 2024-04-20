import {Component, input, output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CurrenciesComponent} from "../../currencies/geocoins/currencies.component";
import {MatDrawer, MatSidenav} from "@angular/material/sidenav";
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

  isCollapsed = input.required<boolean>();
  itemClicked = output()

  toggleSideBar() {
    this.itemClicked.emit();
  }
}
