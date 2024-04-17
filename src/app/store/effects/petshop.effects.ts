import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, mergeMap, of} from "rxjs";
import {PetService} from "../../service/petservice/pet.service";
import {buyPet, buyPetSuccess, loadPetShop, loadPetShopError, loadPetShopSuccess} from "../actions/petshop.actions";
import {addPet, removePet} from "../actions/pets.actions";

@Injectable()
export class PetShopEffects {

  constructor(private actions$: Actions, private petService: PetService) {
  }

  loadPetShop$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPetShop),
      mergeMap(() =>
        this.petService.getPetShop().pipe(map((petShop) => loadPetShopSuccess({petShop})), catchError((error) => of(loadPetShopError({error}))))
      ))
  )

  buyPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPet),
      mergeMap((props) =>
        this.petService.createPet(props.petId).pipe(map((pet) => buyPetSuccess({pet})), catchError((error) => of(loadPetShopError({error}))))
      ))
  )

  removeBoughtPet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(buyPetSuccess),
      mergeMap((props) =>
        of(props.pet).pipe(map((pet) => addPet({pet})))
      ))
  )
}
