import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
