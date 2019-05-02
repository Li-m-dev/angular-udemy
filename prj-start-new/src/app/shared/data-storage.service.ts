import { Http } from "@angular/http";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { HttpRequest } from "selenium-webdriver/http";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  saveData() {
    const token = this.authService.getToken();
    // const headers= new HttpHeaders().set('Authorization', "whateversldfjlasjfl")

    return this.httpClient.put(
      "https://ng-recipe-book-e2977.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        observe: "body",
        params: new HttpParams().set("auth", token)
      }
    );

    // const req = new HttpRequest(
    //   "PUT",
    //   "https://ng-recipe-book-e2977.firebaseio.com/recipes.json",
    //   this.recipeService.getRecipes(),
    //   { reportProgress: true, params: new HttpParams().set("auth", token) }
    // );
    // return this.httpClient.request(req);
  }

  fetchRecipes() {
    const token = this.authService.getToken();

    // this.httpClient
    //   .get<Recipe[]>(
    //     "https://ng-recipe-book-e2977.firebaseio.com/recipes.json?auth=" + token
    //   )
    this.httpClient
      .get<Recipe[]>(
        "https://ng-recipe-book-e2977.firebaseio.com/recipes.json?auth=" +
          token,
        {
          observe: "body",
          responseType: "json"
        }
      )
      .pipe(
        map(recipes => {
          console.log(recipes);
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
