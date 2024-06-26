import {Component, inject, input, OnInit} from '@angular/core';
import {PetModel} from "../../../model/pet/pet.model";
import {PetComponent} from "../pet/pet.component";
import {map, Observable} from "rxjs";
import {LoadingComponent} from "../../page/loading/loading.component";
import {Store} from "@ngrx/store";
import {PetsState} from "../../../store/reducers/pets.reducers";
import {AsyncPipe, NgStyle} from "@angular/common";
import {feedPet} from "../../../store/actions/pets.actions";
import {PetfeedingModel} from "../../../model/pet/petfeeding.model";
import {PetfoodsModel} from "../../../model/currency/petfoods.model";
import {PetfoodsState} from "../../../store/reducers/petfoods.reducers";
import {MatButton} from "@angular/material/button";
import {PetfoodsComponent} from "../../currencies/petfoods/petfoods.component";

@Component({
  selector: 'app-pet-details',
  standalone: true,
  imports: [
    PetComponent,
    LoadingComponent,
    AsyncPipe,
    NgStyle,
    MatButton,
    PetfoodsComponent
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
    let petFood;
    switch (this.pet.appearance.geometry) {
      case "circle" :
        petFood = this.petFoods.circle;
        break;
      case "triangle" :
        petFood = this.petFoods.triangle;
        break;
      case "rectangle":
        petFood = this.petFoods.rectangle;
        break;
      default:
        return;
    }
    const amount = 100 - this.pet.hunger < petFood ? 100 - this.pet.hunger : petFood
    let feeding: PetfeedingModel = {petId: this.petId(), amount, foodType: this.petGeometry}
    this.store.dispatch(feedPet({feeding}))
  }
}
