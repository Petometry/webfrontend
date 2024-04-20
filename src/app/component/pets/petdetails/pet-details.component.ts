import {Component, inject, input, OnInit} from '@angular/core';
import {PetModel} from "../../../model/pet/pet.model";
import {PetComponent} from "../pet/pet.component";
import {map, Observable} from "rxjs";
import {LoadingComponent} from "../../page/loading/loading.component";
import {Store} from "@ngrx/store";
import {PetsState} from "../../../store/reducers/pets.reducers";
import {AsyncPipe, NgStyle} from "@angular/common";
import {feedPet} from "../../../store/actions/pets.actions";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PetfeedingModel} from "../../../model/pet/petfeeding.model";
import {PetfoodsModel} from "../../../model/currency/petfoods.model";
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
  private petGeometry: string;
  private petFoods: PetfoodsModel;
  private pet: PetModel;
  private petFoods$: Observable<PetfoodsState>;

  constructor() {
    this.pets$ = this.store.select("pets")
    this.pet$ = this.pets$.pipe(map(ps => ps.entities[this.petId()]))
    this.petFoods$ = this.store.select("petFoods")
    this.petFoods = {} as PetfoodsModel
    this.pet = {} as PetModel
    this.petGeometry = ""
  }

  ngOnInit(): void {
    this.petFoods$.subscribe((petFoodsState: PetfoodsState) => this.petFoods = petFoodsState.petfoods)
    this.pet$.subscribe(pet => {
      this.petGeometry = pet?.appearance.geometry!;
      this.pet = pet!
    })
  }

  feedPet() {
    const petFood = this.pet.appearance.geometry == "circle" ? this.petFoods.circle : this.pet.appearance.geometry == "triangle" ? this.petFoods.triangle : this.petFoods.rectangle
    const amount = 100 - this.pet.hunger < petFood ? 100 - this.pet.hunger : petFood
    let feeding: PetfeedingModel = {petId: this.petId(), amount, foodType: this.petGeometry}
    this.store.dispatch(feedPet({feeding}))
  }
}
