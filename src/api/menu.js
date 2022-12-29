import instance from '@/api/index';

export const getMyMenu = async () => {
  const res = instance.get('/v1/admins/my-menu');
  return res;
};
