import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home/home.component';
import { RecipesComponent } from './modules/recipe/components/recipes/recipes.component';
import { RecipeDetailsComponent } from './modules/recipe/components/recipe-details/recipe-details.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ErrorFooterComponent } from './shared/components/error-footer/error-footer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'error',
    component: ErrorFooterComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
