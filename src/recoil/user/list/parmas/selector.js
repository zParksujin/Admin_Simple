import { selector } from 'recoil';
import userListBodyAtom from './atom';
// import atom from "."

export const userListBodyParam = selector({
  key: 'userListBodyParam',
  get: ({ get }) => get(userListBodyAtom),
  set: ({ get, set }, param) => {
    const bodyOrigin = get(userListBodyAtom);
    console.log('userListBodyParam', bodyOrigin, { ...param });
    set(userListBodyAtom, { ...bodyOrigin, ...param });
  },
});

export const userListBodySearch = selector({
  key: 'userListBodySearch',
  get: ({ get }) => get(userListBodyAtom),
  set: ({ get, set }, param) => {
    const bodyOrigin = get(userListBodyAtom);
    console.log('userListBodySearch ', bodyOrigin, param);
    set(userListBodyAtom, param);
  },
});

// export default userListBodySelector;
