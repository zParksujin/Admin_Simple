import { selector } from 'recoil';
import userListBodyAtom from './atom';
// import atom from "."

const userListBodySelector = selector({
  key: 'userListBodySelector',
  get: ({ get }) => get(userListBodyAtom),
  set: ({ get, set }, param) => {
    const bodyOrigin = get(userListBodyAtom);
    console.log('ori, new ', bodyOrigin, { ...param });
    set(userListBodyAtom, { ...bodyOrigin, ...param });
  },
});

export default userListBodySelector;
