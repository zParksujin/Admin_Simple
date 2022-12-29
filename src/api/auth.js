import instance from '@/api';

export const adminLogin = async (body) => {
  const res = await instance.post('/v1/admins/login', {
    _checkToken: true,
    ...body,
  });

  return res;
};

export const checkRefreshToken = async (token) => {
  const res = await instance.post('/v1/admins/refresh_token', {
    refresh_token: token,
    _checkToken: true,
  });
  return res;
};

export const getAdminMe = async (checkToken = true) => {
  const res = await instance.get('/v1/admins/me', { _checkToken: checkToken });
  return res;
};

export const MyIpCheck = async () => {
  const res = await instance.get('/v1/admins/my-ip');
  return res;
};
