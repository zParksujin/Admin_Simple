import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage,
});

const myIpAtom = atom({
  key: 'myIpAtom',
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export default myIpAtom;
