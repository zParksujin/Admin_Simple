// @ts-nocheck
import { selector } from 'recoil';
import globalModalAtom from '.';

import { IGlobalModal } from './atom';

export const globalModalCreator = selector<IGlobalModal>({
  key: 'globalModalCreator',
  get: ({ get }) => get(globalModalAtom),
  set: ({ get, set }, newValue: IGlobalModal) => {
    const atom = [...get(globalModalAtom)];
    atom.push(newValue);
    set(globalModalAtom, [...atom]);
  },
});

export const globalModalClose = selector({
  key: 'globalModalClose',
  get: ({ get }) => get(globalModalAtom),
  set: ({ get, set }) => {
    const atom = [...get(globalModalAtom)];
    if (atom.length > 0) {
      atom.pop();
      set(globalModalAtom, atom);
    }
  },
});
