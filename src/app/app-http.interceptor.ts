import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {    
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', environment.API_URL),
        headers: request.headers.set('X-Parse-Application-Id', environment.APPLICATION_ID)
          .set('X-Parse-REST-API-Key', environment.REST_API_KEY)
      });
    }

    // {
    //   'X-Parse-Application-Id': environment.APPLICATION_ID,
    //   'X-Parse-REST-API-Key': environment.REST_API_KEY,
    // }

    return next.handle(request);
  }
}

export const appHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppHttpInterceptor,
  multi: true,
}