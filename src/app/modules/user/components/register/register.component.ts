import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userService: UserService) { }

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.userService.register(JSON.stringify(form.value)).subscribe(console.log);
  }
}
