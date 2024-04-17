import {Component, inject, input, OnInit} from '@angular/core';
import {PetModel} from "../../../model/pet/pet.model";
import {PetComponent} from "../pet/pet.component";
import {map, Observable, of} from "rxjs";
import {LoadingComponent} from "../../loading/loading.component";
import {Store} from "@ngrx/store";
import {PetsState} from "../../../store/reducers/pets.reducers";
import {AsyncPipe, NgStyle} from "@angular/common";
import {feedPet} from "../../../store/actions/pets.actions";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PetfoodsState} from "../../../store/reducers/petfoods.reducers";
import {PetfeedingModel} from "../../../model/pet/petfeeding.model";

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
export class PetDetailsComponent implements OnInit{

  petId = input.required<number>();

  store = inject(Store)
  pet$: Observable<PetModel | undefined>
  pets$: Observable<PetsState>;
  petfoods$: Observable<PetfoodsState>;
  private maxFeedAmount: number;
  private petGeometry: string;

  constructor() {
    this.petfoods$ = this.store.select("petfoods")
    this.pets$ = this.store.select("pets")
    this.maxFeedAmount = 0
    this.petGeometry = ""
    this.pet$ = of(undefined)
  }

  ngOnInit(): void {
    this.pet$ = this.pets$.pipe(map(ps => ps.entities[this.petId()]))
    this.pet$.subscribe(pet => {
      this.petGeometry = pet?.appearance.geometry!;
      this.maxFeedAmount = 100 - pet?.hunger!
    })
    }

  feedPet() {
    let feeding: PetfeedingModel = {petId: this.petId(), amount: this.maxFeedAmount, foodType: this.petGeometry}
    this.store.dispatch(feedPet({feeding}))
  }
}
