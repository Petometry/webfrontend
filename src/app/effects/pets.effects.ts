import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {PetService} from "../service/petservice/pet.service";
import {loadPets, loadPetsError, loadPetsSuccess} from "../actions/pets.actions";
import {buyPet, buyPetError, buyPetSuccess} from "../actions/petshop.actions";
import {PetModel} from "../model/pet/pet.model";

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

  buyPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPet),
      mergeMap((props) =>
        this.petService.createPet(props.petId).pipe(map((pet: PetModel) => buyPetSuccess({pet: pet})), catchError((error) => of(buyPetError({error}))))
      ))
  )
}
