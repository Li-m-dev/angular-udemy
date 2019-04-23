import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  // ingredientsChanged = {
  //   emit: function(param:Ingredient[]){},

  // }
  private ingredients: Ingredient[] = [
    new Ingredient("Apple", 5),
    new Ingredient("tomatoes", 10)
  ];

  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
