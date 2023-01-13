export const searchType = ['profile_id', 'message_idx', 'nick'];
const dateType = ['create'];
const adultType = ['', 'Y', 'N'];
const statusType = ['', 'Y', 'B', 'D'];
const sortType = ['create'];
const listType = ['list', 'content'];

export const typeKeyArray = ['search_type', 'date_type', 'adult_yn', 'status', 'sort'];
export const typeOptions = {
  search_type: searchType,
  date_type: dateType,
  adult_yn: adultType,
  status: statusType,
  sort: sortType,
  list_type: listType,
};

export const paramType = {
  profile_id: '',
  offset: 0,
  limit: 20,
  date_type: 'create',
  sort: 'create',
  adult_yn: '',
  status: '',
  list_type: 'list',
};
