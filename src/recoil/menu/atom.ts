import { PersistStorage, recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';
import { IMyMenuItem } from '@/api/menu/type';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage as PersistStorage,
});

const menuAtom = atom<IMyMenuItem[]>({
  key: 'menuAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export default menuAtom;
