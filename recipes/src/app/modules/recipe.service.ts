import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { RecipesResults } from '../types/recipeResults';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl: string = environment.RECIPE_CLASS_URL;
  private appId: string = environment.APPLICATION_ID;
  private apiKey: string = environment.REST_API_KEY;

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<RecipesResults> {
    return this.http.get<RecipesResults>(this.apiUrl, {
      'headers': {
        'X-Parse-Application-Id': this.appId,
        'X-Parse-REST-API-Key': this.apiKey,
      }
    });
  }
}
