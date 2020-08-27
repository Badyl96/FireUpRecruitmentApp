import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = `http://localhost:3000/`;

  constructor(private http: HttpClient) { }
  login(token) {
    const url = this.url + 'auth/facebook'
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
    };
    return this.http.get(url, httpOptions).pipe();
  }

  users() {
    const url = this.url + 'users';
    return this.http.get(url).pipe();
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
