import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A test1",
      "this is a test",
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg"
    ),
    new Recipe(
      "A test2",
      "this is a test33",
      "https://media.self.com/photos/57dff8aa7160f6ee33314fdf/4:3/w_768,c_limit/sub-channel-food_recipes.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
