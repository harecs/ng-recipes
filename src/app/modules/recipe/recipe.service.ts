import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RecipesResults } from '../../types/recipeResults';
import { Recipe } from '../../types/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<RecipesResults> {
    // return this.http.get<RecipesResults>(this.apiUrl, this.options);
    return this.http.get<RecipesResults>('/api/classes/Recipe');
  }

  getRecipe(id: string): Observable<Recipe> {
    // return this.http.get<Recipe>(`${this.apiUrl}/${id}`, this.options);
    return this.http.get<Recipe>(`/api/classes/Recipe/${id}`);
  }
}
