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
  private defaultImgUrl: string = 'https://img.freepik.com/free-vector/fantastic-selection-chef-hats_23-2147630262.jpg?w=600';
  recipe: Recipe = {} as Recipe;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recipe$ = this.recipeService.getRecipe(this.id);

    this.recipe$.subscribe(data => {
      if (data.imageUrl == this.defaultImgUrl) {
        data.imageUrl = '';
      }

      this.recipe = data;
    });
  }

  editRecipe(form: NgForm) {
    const formValue = { ...form.value };

    if (!formValue.serves) {
      formValue.serves = 1;
    }

    if (formValue.imageUrl == '') {
      formValue.imageUrl = this.defaultImgUrl;
    }

    const ownerId: string = this.userService.user?.objectId || '';
    const recipeInfo: RecipeForCreation = { ...formValue, ownerId };

    this.recipeService.editRecipe(this.id, recipeInfo)
      .subscribe(recipe => {
        console.log(recipe);
        
        this.router.navigate([`/recipes/${this.id}`]);
      });
  }
}
