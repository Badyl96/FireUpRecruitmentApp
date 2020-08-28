import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  users(): Observable<User> {
    const url = 'http://localhost:3000/user';
    return this.http.get<User>(url).pipe(catchError(this.handleError));
  }

  handleError(error) {
    return throwError(error);
  }
}
