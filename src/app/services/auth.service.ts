import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { AuthInterface, TokenInterface } from './../interfaces/auth';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    super();
  }
  
  public login(data: AuthInterface): Observable<TokenInterface> {
    const url: string = `${environment.apiURL}/auths/login/`;
    return this.http.post<TokenInterface>(url, data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  public logout(): void {
    localStorage.clear();
  }
  
  public isAuthenticated(): boolean {
    const token: string = localStorage.getItem(this.ACCESS_TOKEN);
    if ( token ) {
      return true;
    }
    return false;
  }

  public create(data: TokenInterface): void {
    localStorage.setItem(this.ACCESS_TOKEN, data.access);
    localStorage.setItem(this.REFRESH_TOKEN, data.refresh);
  }
}
