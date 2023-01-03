// const searchType = ['profile_id', 'nick', 'login_id', 'name', 'birthday', 'phone', 'ipin', 'ci'];
const searchType = ['profile_id', 'nick', 'login_id', 'name', 'birthday', 'phone', 'ipin', 'ci'];
const dateType = ['register', 'leave', 'cert'];
const adultType = ['', 'Y', 'N'];
const statusType = ['', 'cert', 'no-cert', 'leave', 'block'];
const sortType = ['register', 'buy', 'buy-count', 'refund'];

export const typeKeyArray = ['search_type', 'date_type', 'adult_yn', 'status', 'sort'];
export const typeOptions = {
  search_type: searchType,
  date_type: dateType,
  adult_yn: adultType,
  status: statusType,
  sort: sortType,
};

export const paramType = {
  offset: 0,
  limit: 20,
  searchType: 'profile_id',
  searchVal: '',
  date_type: 'register',
  sort: 'register',
  adult_yn: '',
  status: '',
};

// export interface IGetUserListParam extends IApiListParam {
//     sort?: 'register' | 'leave' | 'buy' | 'buy-count' | 'refund' | '';
//     profile_id_nick?: string;
//     profile_id?: string;
//     login_id?: string;
//     nick?: string;
//     name?: string;
//     birthday?: string;
//     phone?: string;
//     ipin?: string;
//     ci?: string;
//     adult_yn?: 'Y' | 'N' | '';
//     ip?: string;
//     status?: 'cert' | 'not-cert' | 'leave' | 'block' | '';
//     date_type?: 'register' | 'leave' | 'cert' | '';
// }
