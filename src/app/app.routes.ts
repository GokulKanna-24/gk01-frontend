import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./Layout/layout.routes').then(r => r.LAYOUT_ROUTES)},
];