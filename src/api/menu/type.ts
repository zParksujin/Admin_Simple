export interface IAdminMenuItem {
  menu_idx: number;
  submenu_idx: number;
  title: string;
  sub_title: string;
  sub_path: string;
  type: string;
  path: string;
}

export interface IMyMenuItem {
  menu_idx: number;
  title: string;
  menus: IAdminMenuItem[];
}
