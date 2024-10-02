import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { mainSettingsResolver } from './main-settings/main-settings.resolver';

export const PAGE_ROUTES: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.routes').then(r => r.WELCOME_ROUTES)},
  { path: 'main_settings', resolve: { datum: mainSettingsResolver }, loadChildren: () => import('./main-settings/main-settings.routes').then(r => r.MAIN_SETTING_ROUTES)}
];