import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private authToken = 'live_4wKIZj63d0cfWTAKiJDaQLQosdxjE8s8gDEFQaOOqnDDRaOrWDvtOBgUlGGK2hkO';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const headers = new HttpHeaders({
      'x-api-key': this.authToken,
    });

    const authReq = request.clone( { headers } );

    return next.handle(authReq);
  }



}
