import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { loggedUser } from 'src/app/types/loggedUser';
import { registeredUser } from 'src/app/types/registeredUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<loggedUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) { }

  registerUser(email: string, username: string, password: string): Observable<registeredUser> {
    const registerData: string = JSON.stringify({ email, username, password });

    return this.http
      .post<registeredUser>('/api/users', registerData, {
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Revocable-Session': '1'
        },
        withCredentials: true
      });
  }

  loginUser(username: string, password: string): Observable<loggedUser> {
    return this.http
      .get<loggedUser>(`/api/login?username=${username}&password=${password}`, {
        headers: {
          'X-Parse-Revocable-Session': '1'
        }, // maybe withCredentials: true ???
      })
      .pipe(tap((user) => this.user$$?.next(user)));
  }

  logoutUser(): void {
    this.user$.subscribe(console.log);
  }
}
