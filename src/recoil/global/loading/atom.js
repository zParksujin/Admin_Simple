import { atom } from 'recoil';

const globalLoadingAtom = atom({
  key: 'globalLoadingAtom',
  default: {},
});

export default globalLoadingAtom;
