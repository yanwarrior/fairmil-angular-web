import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './../services/base.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private baseService: BaseService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token: string = `${this.baseService.BEARER_TOKEN} ${localStorage.getItem(this.baseService.ACCESS_TOKEN)}`;
    const pathName: string = (new URL(request.url)).pathname;
    if ( !this.baseService.IGNORE_PATH_AUTH.includes(pathName) ) {
      console.log(request);
      request = request.clone({
        headers: request.headers.set(
          'Authorization',
          token
        )
    });
    }
    return next.handle(request);
  }
}
