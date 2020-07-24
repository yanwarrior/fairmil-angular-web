import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPaginateInterface, UserInterface } from './../interfaces/user';
import { environment } from './../../environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  public all(): Observable<UserPaginateInterface> {
    const url: string = `${environment.apiURL}/users/`;
    return this.http.get<UserPaginateInterface>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public get(id: number): Observable<UserInterface> {
    const url: string = `${environment.apiURL}/users/${id}/`;
    return this.http.get<UserInterface>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public create(data: UserInterface): Observable<UserInterface> {
    const url: string = `${environment.apiURL}/users/`;
    return this.http.post<UserInterface>(url, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public getAndSetStorage(): void {
    const url: string = `${environment.apiURL}/users/my/`;
    this.http.post<UserInterface>(url, null, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    ).subscribe(
      (response: UserInterface) => {
        localStorage.setItem(this.USER_USERNAME, response.username);
        localStorage.setItem(this.USER_EMAIL, response.email);
        localStorage.setItem(this.USER_FIRST_NAME, response.first_name);
        localStorage.setItem(this.USER_LAST_NAME, response.last_name);
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
