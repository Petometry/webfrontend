import {Component, inject, input, OnInit} from '@angular/core';
import {PetModel} from "../../../model/pet/pet.model";
import {PetComponent} from "../pet/pet.component";
import {map, Observable} from "rxjs";
import {LoadingComponent} from "../../loading/loading.component";
import {Store} from "@ngrx/store";
import {PetsState} from "../../../store/reducers/pets.reducers";
import {AsyncPipe, NgStyle} from "@angular/common";
import {feedPet, loadPets} from "../../../store/actions/pets.actions";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PetfoodsState} from "../../../store/reducers/petfoods.reducers";

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent,
    AsyncPipe,
    NgStyle,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent implements OnInit {

  petId = input.required<number>();

  store = inject(Store)
  pet$: Observable<PetModel | undefined>
  pets$: Observable<PetsState>;
  petfoods$: Observable<PetfoodsState>;
  private maxFeedAmount: number;

  constructor() {
    this.petfoods$ = this.store.select("petfoods")
    this.pets$ = this.store.select("pets")
    this.pet$ = this.pets$.pipe(map(ps => ps.entities[this.petId()]))
    this.maxFeedAmount = 0
    this.pet$.subscribe(pet => this.maxFeedAmount = 100 - pet?.hunger!)
  }

  ngOnInit(): void {
    this.store.dispatch(loadPets())
  }

  feedPet() {
    this.store.dispatch(feedPet({petId: this.petId(), amount: this.maxFeedAmount}))
  }
}
