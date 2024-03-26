import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { LoggedUser } from 'src/app/types/loggedUser';
import { RegisteredUser } from 'src/app/types/registeredUser';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<LoggedUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: LoggedUser | undefined;

  isLogged(): boolean {
    return !!this.user
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => this.user = user);
  }

  registerUser(email: string, username: string, password: string): Observable<RegisteredUser> {
    const url: string = '/api/users';
    const registerData: string = JSON.stringify({ email, username, password });
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Revocable-Session': '1'
      },
      withCredentials: true
    }


    return this.http
      .post<RegisteredUser>(url, registerData);
  }

  loginUser(username: string, password: string): Observable<LoggedUser> {
    const url: string = `/api/login?username=${username}&password=${password}`;
    const options = {
      headers: {
        'X-Parse-Revocable-Session': '1'
      }, // maybe withCredentials: true ???
    };

    return this.http
      .get<LoggedUser>(url, options)
      .pipe(tap((user) => this.user$$?.next(user)))
      .pipe(tap((userData) => localStorage.setItem('token', userData.sessionToken)));
  }

  logoutUser(): Observable<object> {
    const url: string = `/api/logout`;

    let sessionToken: string | undefined;
    this.user$.subscribe((user) => sessionToken = user?.sessionToken);

    const options = {
      headers: {
        'X-Parse-Session-Token': sessionToken //.subscribe((user) => user?.sessionToken)
      }
    }

    return this.http
      .post<object>(url, options)
      .pipe(tap(() => this.user$$.next(undefined)))
      .pipe(tap(() => localStorage.removeItem('token')))
  }

  getUser(token: string) {
    const url: string = '/api/users/me';
    // const token: string = localStorage.getItem('token') || '';

    const options = {
      headers: {
        'X-Parse-Session-Token': token  //.subscribe((user) => user?.sessionToken)
      }
    }

    return this.http
      .get<LoggedUser>(url, options)
      .pipe(tap((user) => this.user$$?.next(user)));
  }

  ngOnDestroy(): void {
    // this.user$$.unsubscribe();
    this.subscription.unsubscribe();
  }
}
