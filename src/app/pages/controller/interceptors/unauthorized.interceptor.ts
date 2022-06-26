import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private service: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // return next.handle(request).pipe(
    //   catchError((error) => {

    //     if (err.status === 401) {
    //       this.service.clearLocalStorage();
    //       this.router.navigate(['login']);
    //     }
    //     console.log(err);

    //     const error = (err && err.error && err.error.message) || err.statusText;

    //     return throwError(error);
    //   })
    // );
    return next.handle(request);
  }

}
