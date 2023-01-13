import { selector } from 'recoil';
import globalLoadingAtom from '.';

export const globalLoadingCreator = selector({
  key: 'globalLoadingCreator',
  get: ({ get }) => get(globalLoadingAtom),
  set: ({ set }, obj) => {
    set(globalLoadingAtom, obj);
  },
});

export const globalLoadingClose = selector({
  key: 'globalLoadingClose',
  get: ({ get }) => get(globalLoadingAtom),
  set: ({ set }) => {
    set(globalLoadingAtom, {});
  },
});
