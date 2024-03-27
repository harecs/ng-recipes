import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { UserService } from 'src/app/modules/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RecipeForCreation } from 'src/app/types/recipeForCreation';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/types/recipe';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  private recipe$: Observable<Recipe> | undefined;
  private id: string = '';
  recipe: Recipe = {} as Recipe;
  


  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    console.log(this.id);

    this.recipe$ = this.recipeService.getRecipe(this.id);
    this.recipe$.subscribe(data => {
      this.recipe = data;
      console.log(this.recipe);
      
    });
  }

  editRecipe(form: NgForm) {
    const ownerId: string = this.userService.user?.objectId || '';
    const recipeInfo: RecipeForCreation = { ...form.value, ownerId };

    this.recipeService.editRecipe(this.id, recipeInfo)
      .subscribe(recipe => {
        this.router.navigate([`/recipes/${this.id}`]);
      });
  }


}
