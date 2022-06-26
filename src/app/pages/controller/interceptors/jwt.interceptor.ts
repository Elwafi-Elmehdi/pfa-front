import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../../services/storage.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.storageService.get('access_token');
    const isApiUrl = request.url.startsWith(environment.url);
    if (accessToken && isApiUrl) {
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        }
      });
    }
    return next.handle(request);
  }
}
