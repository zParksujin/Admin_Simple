import { useSetRecoilState } from 'recoil';
import { globalModalClear, globalModalClose, globalModalCreator } from '@/recoil/global/modal';

const useGlobalModal = () => {
  const setModal = useSetRecoilState(globalModalCreator);
  const setCloseModal = useSetRecoilState(globalModalClose);
  const setClearModal = useSetRecoilState(globalModalClear);

  return { setModal, setCloseModal, setClearModal };
};

export default useGlobalModal;
