import { Routes } from '@angular/router';
import { MainSettingsComponent } from './main-settings.component';
import { ModulesComponent } from './modules/modules.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { UsersComponent } from './users/users.component';
import { TenantModulesComponent } from './tenant-modules/tenant-modules.component';

export const MAIN_SETTING_ROUTES: Routes = [
  { path: '', component: MainSettingsComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'permissions', component: PermissionsComponent },
  { path: 'modules', component: ModulesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'tenant_modules', component: TenantModulesComponent }
];