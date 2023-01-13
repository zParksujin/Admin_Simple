import { IApiListParam } from '..';

export interface IContentItem {
  pkg_idx: number;
  pkg_type: string;
  pkg_status: string;
  content_idx: number;
  content_type: string;
  content_status: string;
  reg_date: string;
  content_url: string | Record<string, string>;
  poster_url?: string;
  content_filesize: number;
  content_name: string;
  storage_name: string;
  creator_user_idx: number;
}

export interface IContentMessageItem {
  message_idx: number;
  message_type: string;
  status: string;
  creator_user_idx: number;
  creator_nick: string;
  creator_profile_id: string;
  adult_yn: string;
  price: number;
  buy_count: number;
  create_date: string;
  content?: IContentItem;
  contents?: IContentItem[];
  memo: string;
}

export interface IGetContentMessageListParam extends IApiListParam {
  sort?: 'create' | '';
  date_type?: 'create' | '';
  profile_id?: string;
  nick?: string;
  status?: string;
  list_type?: 'list' | 'content' | '';
  adult_yn?: 'Y' | 'N' | '';
  message_idx?: number;
}

export interface IAddBlockUserParam {
  user_idx?: number;
  post_idx?: number;
  comment_idx?: number;
  reply_idx?: number;
  message_idx?: number;
  type: 'warning' | 'restriction' | 'ban';
  category_idx: number;
  expire_day: '0' | '3' | '7' | '30' | '36500';
  block_date?: string;
  memo?: string;
}

export interface IBlockUserItem {
  block_idx: number;
  status: string;
  type: string;
  type_name: string;
  content_type: string;
  content_type_name: string;
  content_idx: number;
  expire_day: number;
  begin_date: string;
  end_date: string;
  block_date: string;
  user_idx: number;
  nick: string;
  profile_id: string;
  admin_user_idx: number;
  admin_nick: string;
  admin_profile_id: string;
  category_idx: number;
  category: string;
  category_code: number;
  message: string;
  memo: string;
}

export interface IBlockContentItem extends IBlockUserItem {
  content_status: string;
  content_desc: string;
  content_reg_date: string;
}

export interface IGetBlockContentInfoParam {
  block_idx?: number;
  post_idx?: number;
  comment_idx?: number;
  reply_idx?: number;
  message_idx?: number;
}

export interface IBlockCategoryCodeItem {
  idx: number;
  type: string;
  expire_day: number;
  category: string;
  message: string;
}
