import { IApiListParam } from '..';

export interface IUserItem {
  user_idx: number;
  profile_id: string;
  login_id: string;
  login_status: string;
  nick: string;
  name: string;
  birthday: string;
  gender: string;
  telecom: string;
  phone: string;
  ci: string;
  di: string;
  ipin: string;
  mycerti_yn: string;
  adultcert_yn: string;
  partner_yn: string;
  lastlogin_date: string;
  reg_date: string;
  leave_date: string;
  buy_total: number;
  buy_count: number;
  refund_total: number;
  status_name: string;
  login_social_code: string;
  login_social_code_name: string;
  ip: string;
  user_type_code: string;
  user_type_code_name: string;
  profilebgimg_url: string;
  profileimg_url: string;
  memo: string;
  email_yn: string;
  kakao_yn: string;
  push_yn: string;
  ban_forever_yn: string;
}

export interface IGetUserListParam extends IApiListParam {
  sort?: 'register' | 'leave' | 'buy' | 'buy-count' | 'refund' | '';
  profile_id_nick?: string;
  profile_id?: string;
  login_id?: string;
  nick?: string;
  name?: string;
  birthday?: string;
  phone?: string;
  ipin?: string;
  ci?: string;
  adult_yn?: 'Y' | 'N' | '';
  ip?: string;
  status?: 'cert' | 'not-cert' | 'leave' | 'block' | '';
  date_type?: 'register' | 'leave' | 'cert' | '';
}
