import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public ACCESS_TOKEN: string = 'ACCESS_TOKEN';
  public REFRESH_TOKEN: string = 'REFRESH_TOKEN';
  public USER_USERNAME: string = 'USER_USERNAME';
  public USER_EMAIL: string = 'USER_EMAIL';
  public USER_LAST_NAME: string = 'USER_LAST_NAME';
  public USER_FIRST_NAME: string = 'USER_FIRST_NAME';
  public BEARER_TOKEN: string = 'Bearer';
  public IGNORE_PATH_AUTH: string[] = [
    '/auths/login/',
  ];

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor() { }

  protected handleError(error: HttpErrorResponse) {
    if ( error.error instanceof ErrorEvent ) {
      console.log('An error occured: ', error.error.message);
    } 
    else {
      console.log(error.status, error.error);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
