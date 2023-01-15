import { selector } from 'recoil';
import globalLoadingAtom from '.';

import { IGlobalLoading } from './atom';

export const globalLoadingCreator = selector<IGlobalLoading>({
  key: 'globalLoadingCreator',
  get: ({ get }) => get(globalLoadingAtom),
  set: ({ set }, obj) => {
    set(globalLoadingAtom, obj);
  },
});
