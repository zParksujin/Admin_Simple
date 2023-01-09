export const searchType = [
  'profile_id',
  'nick',
  'login_id',
  'name',
  'birthday',
  'phone',
  'ipin',
  'ci',
];
const dateType = ['register', 'leave', 'cert'];
const adultType = ['', 'Y', 'N'];
const statusType = ['', 'cert', 'not-cert', 'leave', 'block'];
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
  profile_id: '',
  offset: 0,
  limit: 20,
  date_type: 'register',
  sort: 'register',
  adult_yn: '',
  status: '',
};
