import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { projectEnv } from '../../config/environment';

const API_HOST = projectEnv.APIhost;

@Injectable({
  providedIn: 'root'
})
export class MainSettingService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  get accessToken() {
    return this.cookie.check('prauth') ? this.cookie.get('prauth') : "";
  }

  getModules(page: number,  pageSize: number) {
    const params = new HttpParams()
    .set('page', page).set('page_size', pageSize);
    const headers = new HttpHeaders()
    .set('Authorization', this.accessToken)
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const httpOptions = {
      headers: headers,
      params: params
    }
    return this.http.get(API_HOST +'get-modules', httpOptions);
  }

  getRoles(page: number,  pageSize: number) {
    const params = new HttpParams()
    .set('page', page).set('page_size', pageSize);
    const headers = new HttpHeaders()
    .set('Authorization', this.accessToken)
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const httpOptions = {
      headers: headers,
      params: params
    }
    return this.http.get(API_HOST +'get-roles', httpOptions);
  }
  getPermissions(page: number,  pageSize: number) {
    const params = new HttpParams()
    .set('page', page).set('page_size', pageSize);
    const headers = new HttpHeaders()
    .set('Authorization', this.accessToken)
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const httpOptions = {
      headers: headers,
      params: params
    }
    return this.http.get(API_HOST +'get-permissions', httpOptions);
  }
}
