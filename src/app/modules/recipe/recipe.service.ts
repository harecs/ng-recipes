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
    return this.http.get<RecipesResults>('/api/classes/Recipe');
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`/api/classes/Recipe/${id}`);
  }

  getRecipesByUser(userId: string): Observable<RecipesResults> {
    return this.http.get<RecipesResults>(`/api/classes/Recipe?where={"ownerId":"${userId}"}`);
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

    const recipeWithACL = {
      ...recipeInfo,
      ACL: Object.fromEntries(aclEntries)
    }

    const recipeJSON: string = JSON.stringify(recipeWithACL);

    const sessionToken: string = localStorage.getItem('token') || '';
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Session-Token': sessionToken
      }
    }

    return this.http.post<Recipe>(url, recipeJSON, options);
  }

  editRecipe(id: string, recipeInfo: RecipeForCreation): Observable<Recipe> {
    const url: string = `/api/classes/Recipe/${id}`;

    const recipeJSON: string = JSON.stringify(recipeInfo);

    const sessionToken: string = localStorage.getItem('token') || '';
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Session-Token': sessionToken
      }
    }

    return this.http.put<Recipe>(url, recipeJSON, options);
  }

  deleteRecipe(id: string) {
    const url: string = `/api/classes/Recipe/${id}`;

    const sessionToken: string = localStorage.getItem('token') || '';
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Session-Token': sessionToken
      }
    }

    return this.http.delete<string>(url, options);
  }
}