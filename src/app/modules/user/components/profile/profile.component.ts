import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/modules/recipe/recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { RecipesResults } from 'src/app/types/recipeResults';
import { UserService } from '../../user.service';
import { LoggedUser } from 'src/app/types/loggedUser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: LoggedUser | undefined;
  recipes: Recipe[] | undefined;

  constructor(private userService: UserService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    const token: string = localStorage.getItem('token') || '';

    if (token) {
      this.userService.getUser(token)
        .subscribe((data) => {
          this.user = data;

          this.recipeService.getRecipesByUser(data.objectId)
            .subscribe(recipesData => {
              this.recipes = recipesData.results;
            });
        });
    }
  }
}
