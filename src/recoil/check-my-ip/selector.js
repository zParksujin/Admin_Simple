import { selector } from 'recoil';
import { myIpCheck } from '@/api/auth';
// import atom from "."

const checkMyIp = selector({
  key: 'checkMyIp',
  get: async () => {
    const res = await myIpCheck();
    if (res?.status === 200) {
      return res.data;
    }
    return res;
  },
});

export default checkMyIp;
