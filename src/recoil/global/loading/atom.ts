import { atom } from 'recoil';

export interface IGlobalLoading {
  type: string;
}

const globalLoading = atom<IGlobalLoading>({
  key: 'globalLoadingAtom',
  default: {
    type: '',
  },
});

export default globalLoading;
