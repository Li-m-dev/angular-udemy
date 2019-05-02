import { Action } from "@ngrx/store";

import { Recipe } from "../recipe.model";

export const SET_RECIPES = "SET_RECIPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const STORE_RECIPES = "STORE_RECIPES";
export const FETCH_RECIPES = "FETCH_RECIPES";

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;
  constructor(public payload: Recipe[]) {}
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;
  constructor(public payload: Recipe) {}
}
export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;
  constructor(public payload: { index: number; updatedRecipe: Recipe }) {}
}
export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;
  constructor(public payload: number) {}
}
export class StoreRecipes implements Action {
  readonly type = STORE_RECIPES;
}
export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export type RecipeActions =
  | SetRecipes
  | AddRecipe
  | UpdateRecipe
  | DeleteRecipe
  | StoreRecipes
  | FetchRecipes;

// setRecipes(recipes: Recipe[]) {
//   this.recipes = recipes;
//   this.recipesChanged.next(this.recipes.slice());
// }

// getRecipes() {
//   return this.recipes.slice();
// }

// getRecipe(index: number) {
//   return this.recipes[index];
// }

// addRecipe(recipe: Recipe) {
//   this.recipes.push(recipe);
//   this.recipesChanged.next(this.recipes.slice());
// }

// updateRecipe(index: number, newRecipe: Recipe) {
//   this.recipes[index] = newRecipe;
//   this.recipesChanged.next(this.recipes.slice());
// }

// deleteRecipe(index: number) {
//   this.recipes.splice(index, 1);
//   this.recipesChanged.next(this.recipes.slice());
// }
