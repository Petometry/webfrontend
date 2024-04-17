import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {PetService} from "../../service/petservice/pet.service";
import {
  feedPet,
  feedPetSuccess,
  freePet,
  freePetSuccess,
  loadPets,
  loadPetsError,
  loadPetsSuccess
} from "../actions/pets.actions";
import {decreasePetfoods} from "../actions/petfoods.actions";
import {PetfoodsModel} from "../../model/currency/petfoods.model";
import {PetfeedingModel} from "../../model/pet/petfeeding.model";

@Injectable()
export class PetsEffects {

  constructor(private actions$: Actions, private petService: PetService) {
  }

  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPets),
      mergeMap(() =>
        this.petService.getPets().pipe(map((pets) => loadPetsSuccess({pets})), catchError((error) => of(loadPetsError({error}))))
      ))
  )

  freePets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(freePet),
      mergeMap((props) =>
        this.petService.deletePet(props.petId).pipe(map(() => freePetSuccess({petId: props.petId})), catchError((error) => of(loadPetsError({error}))))
      ))
  )

  feedPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(feedPet),
      mergeMap((props) =>
        this.petService.createFeeding(props.feeding).pipe(map((feeding) => feedPetSuccess({feeding})), catchError((error) => of(loadPetsError({error}))))
      ))
  )

  feedPetSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(feedPetSuccess),
      mergeMap((props) =>
        of(props.feeding).pipe(map((feeding) => decreasePetfoods({petfoods: this.mapFeedingToPetFoods(feeding)})))
      ))
  )

  private mapFeedingToPetFoods(feeding: PetfeedingModel):PetfoodsModel {
    switch (feeding.foodType) {
      case "CIRCLE" : return {circle: feeding.amount, rectangle: 0, triangle: 0};
      case "TRIANGLE" : return {circle: 0, rectangle: 0, triangle: feeding.amount};
      case "RECTANGLE" : return {circle: 0, rectangle: feeding.amount, triangle: 0};
      default: return {} as PetfoodsModel
    }
  }
}
