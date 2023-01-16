// @ts-nocheck
import { selector } from 'recoil';
import { getUserList } from '@/api/user';

import userListParamAtom from './parmas';

const userListSelector = selector({
  key: 'userListSelector',
  get: async ({ get }) => {
    const param = get(userListParamAtom);
    const res = await getUserList(param);
    if (res?.error || res.status !== 200) {
      throw res.error;
    }
    return res;
  },
});

export default userListSelector;
