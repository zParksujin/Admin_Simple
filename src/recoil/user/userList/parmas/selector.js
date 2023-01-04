import { selector } from 'recoil';
import userListParamAtom from './atom';
// import atom from "."

export const userListParam = selector({
  key: 'userListParam',
  get: ({ get }) => get(userListParamAtom),
  set: ({ get, set }, param) => {
    const paramOrigin = get(userListParamAtom);
    console.log('userListParam', paramOrigin, { ...param });
    set(userListParamAtom, { ...paramOrigin, ...param });
  },
});

export const userListSearch = selector({
  key: 'userListSearch',
  get: ({ get }) => get(userListParamAtom),
  set: ({ get, set }, param) => {
    const paramOrigin = get(userListParamAtom);
    console.log('userListSearch ', paramOrigin, param);
    set(userListParamAtom, param);
  },
});

// export default userListBodySelector;
