import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
