import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Authorization } from '../model/authorization';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(token): Observable<Authorization> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': [`Bearer ${token}`]
        })
    };
    const url = `http://localhost:3000/auth/facebook`;
    return this.http.get<Authorization>(url, httpOptions).pipe();
  }


}
