import { selector } from 'recoil';
import { getUserList } from '@/api/user';

import userListBodyAtom from './body/atom';
// import atom from "."

const userListSelector = selector({
  key: 'userListSelector',
  get: async ({ get }) => {
    const body = get(userListBodyAtom);
    const res = await getUserList(body);
    if (res.error) {
      throw res.error;
    }
    return res.data;
  },
});

export default userListSelector;
