import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  readonly regex: string = '';

  addRecipe(form: NgForm) {
    
    
    console.log('add recipe activated');
    console.log(form.value);

  }
}
