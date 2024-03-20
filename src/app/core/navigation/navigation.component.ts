import { Component } from '@angular/core';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isSidebarShowed: boolean = false;

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  constructor(private userService: UserService) {}

  w3_open(): void {
    this.isSidebarShowed = !this.isSidebarShowed;
  }

  w3_close(): void {
    this.isSidebarShowed = false;
  }
}
