import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from 'src/app/guards/auth.activate';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';


const routes: Routes = [
    {
        path: 'recipes',
        children: [
            { path: '', pathMatch: 'full', component: RecipesComponent },
            { path: ':id', component: RecipeDetailsComponent }
        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
