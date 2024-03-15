import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home/home.component';
import { RecipesComponent } from './modules/recipe/components/recipes/recipes.component';
import { RecipeDetailsComponent } from './modules/recipe/components/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'recipes',
    children: [
      { path: '', pathMatch: 'full', component: RecipesComponent },
      { path: ':id', component: RecipeDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
