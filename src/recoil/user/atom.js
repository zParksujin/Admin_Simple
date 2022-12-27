import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

const userAtom = atom({
  key: 'userAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export default userAtom;
