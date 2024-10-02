import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HxMenuItem } from '../../_interfaces/layout';
import { LayoutService } from '../../Layout/layout.service';

export const mainSettingsResolver: ResolveFn<boolean> = (route, state) => {
  const service = inject(LayoutService);
  const parentRoute = "/main_settings";
  const menuItems: HxMenuItem[] = [
    { id: 1, name: "roles", display_name: "Roles", route_name: parentRoute + "/roles", icon: "product", description: "Manage the application's roles"},
    { id: 2, name: "permissions", display_name: "Permissions", route_name: parentRoute + "/permissions", icon: "safety", description: "Manage the permission segments"},
    { id: 3, name: "users", display_name: "Users", route_name: parentRoute + "/users", icon: "user", description: "Handle here the users management"},
    { id: 4, name: "modules", display_name: "Modules", route_name: parentRoute + "/modules", icon: "scan", description: "Manage the application's Module"},
    { id: 5, name: "tenentmodules", display_name: "Tenant Modules", route_name: parentRoute + "/tenant_modules", icon: "form", description: "Manage the tenant side Module"},
  ];
  service.sidebarListItems.set(menuItems);
  return true;
};
