import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RecipesComponent,
    RecipeDetailsComponent
  ]
})
export class RecipeModule { }
