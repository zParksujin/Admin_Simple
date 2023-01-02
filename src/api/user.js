import instance from '.';

export const getUserList = async (body) => {
  const res = await instance.get('/v1/admins/user', body);
  return res;
};
