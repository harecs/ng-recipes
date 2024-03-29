import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RecipesResults } from '../../types/recipeResults';
import { Recipe } from '../../types/recipe';
import { UserService } from '../user/user.service';
import { RecipeForCreation } from 'src/app/types/recipeForCreation';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getAllRecipes(): Observable<RecipesResults> {
    // return this.http.get<RecipesResults>(this.apiUrl, this.options);
    return this.http.get<RecipesResults>('/api/classes/Recipe');
  }

  getRecipe(id: string): Observable<Recipe> {
    // return this.http.get<Recipe>(`${this.apiUrl}/${id}`, this.options);
    return this.http.get<Recipe>(`/api/classes/Recipe/${id}`);
  }

  addRecipe(recipeInfo: RecipeForCreation): Observable<Recipe> {
    const url: string = '/api/classes/Recipe';

    const aclEntries = [
      [
        recipeInfo.ownerId,
        {
          "read": true,
          "write": true
        }
      ],
      [
        "*",
        {
          "read": true
        }
      ]
    ]

    console.log();


    const recipeWithACL = {
      ...recipeInfo,
      ACL: Object.fromEntries(aclEntries)
    }


    // Object.defineProperty(recipeWithACL)

    const recipeJSON: string = JSON.stringify(recipeWithACL);

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return this.http.post<Recipe>(url, recipeJSON, options);
  }

  editRecipe(id: string, recipeInfo: RecipeForCreation): Observable<Recipe> {
    const url: string = `/api/classes/Recipe/${id}`;

    const recipeJSON: string = JSON.stringify(recipeInfo);

    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return this.http.put<Recipe>(url, recipeJSON, options);
  }
}