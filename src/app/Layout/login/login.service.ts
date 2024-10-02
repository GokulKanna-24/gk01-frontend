import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { loginType } from './auth';
import { projectEnv } from '../../config/environment';

const SSO_HOST = projectEnv.SSOhost;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  login(data: loginType) {
    let params = new HttpParams()
    .set('email', data.email)
    .set('password', data.password);

    return this.http.post(SSO_HOST +'login', params);
  }
}
