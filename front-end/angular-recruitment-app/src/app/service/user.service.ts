import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { catchError } from 'rxjs/operators';
import * as config from '../config/url';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  users(): Observable<User> {
    const destinyUsersUrl = config.url + 'user';
    return this.http.get<User>(destinyUsersUrl).pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error);
  }

}
