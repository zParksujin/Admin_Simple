import { selector } from 'recoil';
import { getUserList } from '@/api/user';

import userListParamAtom from './parmas';

const userListSelector = selector({
  key: 'userListSelector',
  get: async ({ get }) => {
    const param = get(userListParamAtom);
    const res = await getUserList(param);
    if (res?.error) {
      throw res.error;
    }
    return res.data;
  },
});

export default userListSelector;
