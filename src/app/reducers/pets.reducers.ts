import {createReducer} from "@ngrx/store";
import {Pet} from "../model/pet/pet";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";

export interface PetsState extends EntityState<Pet>{
  loading: boolean,
  error: string
}

export function selectPetId(a: Pet): number {
  //In this case this would be optional since primary key is id
  return a.id;
}
export const adapter: EntityAdapter<Pet> = createEntityAdapter<Pet>({
  selectId: selectPetId
});

export const initialState: PetsState = adapter.getInitialState({
  loading: true,
  error: ''
});

export const petsReducer = createReducer(initialState);
