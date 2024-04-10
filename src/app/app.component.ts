import {Component, Inject, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PetComponent} from "./component/pet/pet.component";
import {Store} from "@ngrx/store";
import {loadWork} from "./actions/work.actions";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, PetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'frontend';
  pet = {id: 10, appearance: {geometry: "triangle", color: "#121212"}}
  store = Inject(Store);

  ngOnInit(): void {
    this.initializeStore()
  }

  initializeStore() {
    this.store.dispatch(loadWork())
  }


}
