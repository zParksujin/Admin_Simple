import { selector } from 'recoil';
import { MyIpCheck } from '@/api/auth';
// import atom from "."

const checkMyIp = selector({
  key: 'checkMyIp',
  get: async ({ get }) => {
    const res = await MyIpCheck();
    if (res?.status === 200) {
      return res.data;
    }
    return res;
  },
  set: ({ get, set }, value) => {},
});

export default checkMyIp;
