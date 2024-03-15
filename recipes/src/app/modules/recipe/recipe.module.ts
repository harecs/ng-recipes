import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeService } from '../recipe.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipeModule { }
