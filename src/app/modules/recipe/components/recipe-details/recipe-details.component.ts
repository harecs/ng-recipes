import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { RecipeService } from '../../recipe.service';
import { Recipe } from 'src/app/types/recipe';
import { UserService } from 'src/app/modules/user/user.service';
import { LoggedUser } from 'src/app/types/loggedUser';

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
  isOwner: boolean = false;

  subscription = undefined;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.recipe$ = this.recipeService.getRecipe(id);
    this.recipe$.subscribe(data => {
      this.recipe = data;
      this.ingredients = data.ingredients.split('\n');
      this.steps = data.method.split('\n');

      const token: string | null = localStorage.getItem('token');

      if (!token) {
        this.isOwner = false;
      }

      
      if (token && this.userService.user?.objectId == data.ownerId.toString()) {
        this.isOwner = true;
      }
    });
  }

  deleteThisRecipe(id: string) {
    this.recipeService.deleteRecipe(id)
      .subscribe({
        next: () => this.router.navigate(['/recipes']),
        error: () => this.router.navigate([`/recipes/${id}`])
      });
  }
}