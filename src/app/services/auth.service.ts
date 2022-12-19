import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { authEnviroment } from 'src/enviroment/enviroment';
import { IUserData } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = authEnviroment.backendOrigin + '/auth';
  private authData!: IUserData;
  private authStatus: BehaviorSubject<boolean> = new BehaviorSubject(
    !!localStorage.getItem('auth-token')
  );
  private adminStatus: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isHavePermissions()
  );

  constructor(private http: HttpClient, private routes: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('auth-token', res.token);
            this.authStatus.next(true);
            this.authData = this.parseJwt(res.token);
            this.adminStatus.next(this.isHavePermissions());
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('auth-token');
    this.authStatus.next(false);
    this.adminStatus.next(false);
    this.routes.navigate(['']);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  private isHavePermissions(): boolean {
    if (!this.authData && !this.token) return false;

    if (!this.authData && this.token) {
      this.authData = this.parseJwt(this.token);
    }

    for (let role of this.authData.roles) {
      if (role.name === 'ADMIN') return true;
    }
    return false;
  }

  canUseAdminRoute() {
    return this.adminStatus.value;
  }

  get isAuthed(): Observable<boolean> {
    return this.authStatus;
  }

  get userData(): IUserData {
    return this.parseJwt(this.token as string);
  }

  get isAdmin(): Observable<boolean> {
    return this.adminStatus;
  }

  get token() {
    return localStorage.getItem('auth-token');
  }
}
