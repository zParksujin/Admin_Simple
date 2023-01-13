import { IUserItem } from '../user/type';

export interface IAdminUserItem extends IUserItem {
  admin_idx: number;
  admin_user_name: string;
  admin_user_email: string;
  admin_user_grade: string;
  admin_user_job: string;
  admin_user_dept: string;
  admin_user_upr_dept: string;
  permission_idx: number;
  permission_level: number;
  permission_name: string;
}

export interface IAdminLoginToken {
  access_token: string;
  refresh_token: string;
}

export interface IAdminLoginInfo {
  token: IAdminLoginToken;
  userInfo: IAdminUserItem;
}

export interface IAdminLoginParam {
  login_id: string;
  password: string;
}

export interface IMyIpInfo {
  ip: string;
  userAgent: string;
}
