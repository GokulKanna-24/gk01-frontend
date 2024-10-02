import { CanActivateFn, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookie = inject(CookieService);
  if(cookie.check('prauth')) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const authGuard2: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cookie = inject(CookieService);
  if(!cookie.check('prauth')) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};