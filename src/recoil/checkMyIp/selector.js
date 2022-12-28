import { selector } from 'recoil';
import { MyIpCheck } from '@/api/user';
// import atom from "."

const checkMyIp = selector({
  key: 'checkMyIp',
  get: async ({ get }) => {
    const res = await MyIpCheck();
    console.log(res);
    return res;
  },
  set: ({ get, set }, value) => {},
});

export default checkMyIp;
