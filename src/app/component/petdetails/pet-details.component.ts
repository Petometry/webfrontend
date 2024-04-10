import {Component, inject, input, OnInit} from '@angular/core';
import {Pet} from "../../model/pet/pet";
import {PetComponent} from "../pet/pet.component";
import {map, Observable} from "rxjs";
import {LoadingComponent} from "../loading/loading.component";
import {Store} from "@ngrx/store";
import {PetsState} from "../../reducers/pets.reducers";
import {AsyncPipe} from "@angular/common";
import {loadPet} from "../../actions/pet.actions";

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent,
    AsyncPipe
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit{

  petId = input.required<number>();

  store = inject(Store)
  pet$: Observable<Pet | undefined>
  pets$: Observable<PetsState>;

  constructor() {
    this.pets$ = this.store.select("pets")
    this.pet$ = this.pets$.pipe(map(ps => ps.pets.find((p => p.id == this.petId()))))
  }

  ngOnInit(): void {
    this.store.dispatch(loadPet({id: this.petId()}))
  }
}
