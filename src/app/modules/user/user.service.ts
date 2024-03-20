import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  register(formValue: string): Observable<User> {
    return this.http.post<User>('/api/users', formValue, {
      headers: {
        'Content-Type': 'application/json',
        'X-Parse-Revocable-Session': '1'
      },
      withCredentials: true
    });
  }
}
