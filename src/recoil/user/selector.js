import { selector } from 'recoil';

const userSelector = selector({
  key: 'userSelector',
  get: async ({ get }) => {},
  set: ({ get, set }, value) => {},
});

export default userSelector;
