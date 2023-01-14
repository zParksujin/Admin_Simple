import { useResetRecoilState, useSetRecoilState } from 'recoil';
import globalModal, { globalModalClose, globalModalCreator } from '@/recoil/global/modal';

const useGlobalModal = () => {
  // 데이터 초기화 신경쓰며 Close, Clear 해주세요
  const setModal = useSetRecoilState(globalModalCreator);
  const setCloseModal = useSetRecoilState(globalModalClose);
  const setClearModal = useResetRecoilState(globalModal);

  return { setModal, setCloseModal, setClearModal };
};

export default useGlobalModal;
