import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/modules/user/user.service';
import { RecipeForCreation } from 'src/app/types/recipeForCreation';
import { RecipeService } from '../../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  readonly regex: string = '';

  constructor(private recipeService: RecipeService, private userService: UserService, private router: Router) { }

  addRecipe(form: NgForm) {
    const formValue = { ...form.value };

    if (formValue.serves == '') {
      formValue.serves = 1;
    }

    if (formValue.imageUrl === '') {
      formValue.imageUrl = undefined;
    }

    const ownerId: string = this.userService.user?.objectId || '';
    const recipeInfo: RecipeForCreation = { ...formValue, ownerId };

    this.recipeService.addRecipe(recipeInfo)
      .subscribe(recipe => {
        this.router.navigate([`/recipes/${recipe.objectId}`]);
      });
  }
}
