import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeService } from './recipe.service';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    RecipeRoutingModule
  ]
})
export class RecipeModule { }
