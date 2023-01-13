import { selector } from 'recoil';
import contentListParamAtom from '.';

export const contentListParam = selector({
  key: 'contentListParam',
  get: ({ get }) => get(contentListParamAtom),
  set: ({ get, set }, param) => {
    const paramOrigin = get(contentListParamAtom);
    set(contentListParamAtom, { ...paramOrigin, ...param });
  },
});

export const contentListSearch = selector({
  key: 'contentListSearch',
  get: ({ get }) => get(contentListParamAtom),
  set: ({ set }, param) => {
    set(contentListParamAtom, param);
  },
});
