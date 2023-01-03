import instance from '.';

/**
 * QueryString
 * offset: 0,
 * limit: 20,
 * searchType: 'profile_id'
 * searchVal: ''
 * date_type: 'register'
 * sort: 'register'
 * adult_yn: ''
 * status: ''
 */
export const getUserList = async (body) => {
  const res = await instance.get('/v1/admins/user', { params: body });
  return res;
};
