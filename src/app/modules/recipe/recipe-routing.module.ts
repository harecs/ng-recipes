import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from 'src/app/guards/auth.activate';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
// import { OwnerActivate } from 'src/app/guards/owner.activate';


const routes: Routes = [
    {
        path: 'recipes',
        children: [
            { path: '', pathMatch: 'full', component: RecipesComponent },
            { path: 'add', component: RecipeAddComponent, canActivate: [AuthActivate] },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthActivate,] }, // add owner
            { path: ':id', component: RecipeDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule { }
