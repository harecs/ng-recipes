import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../../recipe.service';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  private recipe$: Observable<Recipe> | undefined;
  recipe: Recipe | undefined;
  ingredients: string[] = [];
  steps: string[] = [];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.recipe$ = this.recipeService.getRecipe(id);
    this.recipe$.subscribe(data => {
      this.recipe = data;
      this.ingredients = data.ingredients.split('\n');
      this.steps = data.method.split('\n');
    });
  }
}