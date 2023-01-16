import { atom } from 'recoil';

export interface IGlobalModal {
  type: string;
  props?: any;
}

const globalModal = atom<IGlobalModal[]>({
  key: 'globalModal',
  default: [],
});

export default globalModal;
