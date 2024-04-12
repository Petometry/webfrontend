import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";

import {catchError, map, mergeMap, of} from "rxjs";
import {PetService} from "../service/petservice/pet.service";
import {loadPetShop, loadPetShopError, loadPetShopSuccess} from "../actions/petshop.actions";

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
}
