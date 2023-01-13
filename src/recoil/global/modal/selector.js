import { selector } from 'recoil';
import globalModalAtom from '.';

export const globalModalCreator = selector({
  key: 'globalModalCreator',
  get: ({ get }) => get(globalModalAtom),
  set: ({ get, set }, value) => {
    const atom = [...get(globalModalAtom)];
    atom.push(value);
    set(globalModalAtom, [...atom]);
  },
});

// 데이터 초기화 신경쓰며 Close, Clear 해주세요
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

export const globalModalClear = selector({
  key: 'globalModalClear',
  get: ({ get }) => get(globalModalAtom),
  set: ({ set }) => {
    set(globalModalAtom, []);
  },
});
