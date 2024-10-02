export interface Layout {
}

export interface HxMenuItem {
  id: number;
  name: string;
  display_name: string;
  description: string;
  route_name: string;
  icon: string;
  items?: HxMenuItem[]; // Optional submenu items
}