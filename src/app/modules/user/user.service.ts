import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  registerUser(email: string, username: string, password: string): Observable<User> {
    const registerData = JSON.stringify({ email, username, password });

    return this.http.post<User>('/api/users', registerData, {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Revocable-Session': '1'
      },
      withCredentials: true
    });
  }
}
