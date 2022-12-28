import axios from '@/api/index';

export const MyIpCheck = async () => {
  const res = await axios.get('/v1/admins/my-ip');
  return res;
};
