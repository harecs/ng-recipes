import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.userService.loginUser(form.value.username, form.value.password)
      .subscribe((userData) => {
        this.router.navigate(['/recipes'])
      });
  }

}
