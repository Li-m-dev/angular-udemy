import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  saveData() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(
      "https://ng-recipe-book-e2977.firebaseio.com/recipes.json",
      recipes
    );
  }

  fetchRecipes() {
    return this.http
      .get("https://ng-recipe-book-e2977.firebaseio.com/recipes.json")
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              // console.log("before", recipe);
              recipe["ingredients"] = [];
              // console.log("after", recipe);
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }
}
