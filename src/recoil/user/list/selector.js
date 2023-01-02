import { selector } from 'recoil';
import { getUserList } from '@/api/user';
// import atom from "."

const userListSelector = selector({
  key: 'userListSelector',
  get: async ({ get }) => {
    const res = await getUserList();
    if (res.status === 200) {
      return res.data;
    }
    return res;
  },
});

export default userListSelector;
