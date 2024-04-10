import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of} from "rxjs";
import {PetService} from "../service/petservice/pet.service";
import {loadPet, loadPetError, loadPetSuccess} from "../actions/pet.actions";

@Injectable()
export class PetEffects {

  constructor(private actions$: Actions, private petService: PetService) {
  }

  loadPets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPet),
      mergeMap((props) =>
        this.petService.getPet(props.id).pipe(map((pet) => loadPetSuccess({pet})), catchError((error) => of(loadPetError({error}))))
      ))
  )
}
