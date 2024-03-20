import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { loggedUser } from 'src/app/types/loggedUser';
import { registeredUser } from 'src/app/types/registeredUser';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<loggedUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: loggedUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => this.user = user);
  }

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
    const url = `/api/login?username=${username}&password=${password}`;
    const options = {
      headers: {
        'X-Parse-Revocable-Session': '1'
      }, // maybe withCredentials: true ???
    };

    return this.http
      .get<loggedUser>(url, options)
      .pipe(tap((user) => this.user$$?.next(user)));
  }

  logoutUser(): Observable<object> {
    const url = `/api/logout`;
    
    let sessionToken: string | undefined;
    this.user$.subscribe((user) => sessionToken = user?.sessionToken) ;

    const options = {
      headers: {
        'X-Parse-Session-Token': sessionToken //.subscribe((user) => user?.sessionToken)
      }
    }    

    return this.http
      .post<object>(url, options)
      .pipe(tap(() => this.user$$.next(undefined)))
  }

  ngOnDestroy(): void {
    // this.user$$.unsubscribe();
    this.subscription.unsubscribe();
  }
}
