import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const token: string | null = localStorage.getItem('token');

    if (token) {
      this.userService.getUser(token)
        .subscribe({
          next: () => {
            this.isAuthenticating = false;
          },
          error: () => {
            localStorage.removeItem('token');
            this.isAuthenticating = false;
          },
          complete: () => {
            this.isAuthenticating = false;
          },
        });
    } else {
      this.isAuthenticating = false;
    }
  }
}
