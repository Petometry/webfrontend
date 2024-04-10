import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { PetOverview } from "../../models/pets/petoverview";

// Get complete state of the pets in application
export const selectAppState = createFeatureSelector<AppState>('pets');

// get All pets
export const selectProducts = createSelector(
  selectAppState,
  (state: AppState) => state.pets
);

// get One pet by ID
export const selectProductById = createSelector(
  selectProducts,
  (pets: PetOverview[], props: { petId: number }) =>
    pets.find(pet => pet.id === props.petId)
);
