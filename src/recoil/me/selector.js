import { selector } from 'recoil';
import { getAdminMe } from '@/api/auth';
// import atom from "."

const adminMeSelector = selector({
  key: 'adminMeSelector',
  get: async ({ get }) => {
    const res = await getAdminMe();
    if (res.status === 200) {
      return res.data;
    }
    return res;
  },
});

export default adminMeSelector;
