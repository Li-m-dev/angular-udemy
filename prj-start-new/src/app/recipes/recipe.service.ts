import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "this is a test",
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",

      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "this is a test33",
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg",
      [new Ingredient("Buns", 20), new Ingredient("Meat", 2)]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
    //the updating list was not reflecting in the service,
    // recipesChanged event will emit a new value of the copy of the new recipe list
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
