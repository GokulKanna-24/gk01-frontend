import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { projectEnv } from '../config/environment';
import { HxMenuItem } from '../_interfaces/layout';

const API_HOST = projectEnv.APIhost;

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  iniAuth = {
    first_name: "Groot",
    last_name: "Simple",
    username: "test",
    email: "test@gmail.com",
    role : "user",
    role_display : "User",
    img_url : ""
  }

  authUser = signal(this.iniAuth);
  appTitle = signal("HalaX");
  sidebarListItems = signal<HxMenuItem[]>([]);

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }

  get accessToken() {
    return this.cookie.check('prauth') ? this.cookie.get('prauth') : "";
  }

  getUserDetails() {
    const params = new HttpParams();
    const headers = new HttpHeaders()
    .set('Authorization', this.accessToken)
    .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const httpOptions = {
      headers: headers,
      params: params
    }
    return this.http.post(API_HOST +'get-user-details', params, httpOptions);
  }


}
