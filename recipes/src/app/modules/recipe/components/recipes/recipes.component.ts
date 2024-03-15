import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { RecipeService } from 'src/app/modules/recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { RecipesResults } from 'src/app/types/recipeResults';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  private recipesResults$: Observable<RecipesResults> = this.recipeService.getAllRecipes();
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipesResults$.subscribe(data => {
      this.recipes = data.results;
    })
  }
}
