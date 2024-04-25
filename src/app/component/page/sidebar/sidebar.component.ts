import {Component, input, output} from '@angular/core';
import {RouterLink} from "@angular/router";

import {MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {GeocoinsComponent} from "../../currencies/geocoins/geocoins.component";
import {PetfoodsComponent} from "../../currencies/petfoods/petfoods.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    GeocoinsComponent,
    MatNavList,
    MatIcon,
    PetfoodsComponent,
    NgOptimizedImage
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isCollapsed = input.required<boolean>();
  isMobile = input.required<boolean>();
  itemClicked = output()

  toggleSideBar() {
    this.itemClicked.emit();
  }
}
