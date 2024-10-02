import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { authGuard, authGuard2 } from './login/auth.guard';

const  childRoutes = [
  { path: '', loadChildren: () => import('../pages/pages.routes').then(m => m.PAGE_ROUTES) }
]

export const LAYOUT_ROUTES: Routes = [
  { path: '', component: LayoutComponent, canActivate:[authGuard], children: childRoutes },
  { path: 'login', canActivate: [authGuard2], component: LoginComponent },
];

