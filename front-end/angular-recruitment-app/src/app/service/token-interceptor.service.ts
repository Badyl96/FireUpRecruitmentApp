import { Injectable, Injector } from '@angular/core';
import { ɵHttpInterceptingHandler, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

  intercept(req, next) {
    let authService = this._injector.get(AuthService);
    let tokenIsReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenIsReq);
  }
}
