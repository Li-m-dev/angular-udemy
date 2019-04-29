import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveData() {
    const token = this.authService.getToken();
    const recipes = this.recipeService.getRecipes();
    return this.http.put(
      "https://ng-recipe-book-e2977.firebaseio.com/recipes.json?auth=" + token,
      recipes
    );
  }

  fetchRecipes() {
    const token = this.authService.getToken();
    return this.http
      .get(
        "https://ng-recipe-book-e2977.firebaseio.com/recipes.json?auth=" + token
      )
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe["ingredients"]) {
              recipe["ingredients"] = [];
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
