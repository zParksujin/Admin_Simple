import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalModalAtom from '@/recoil/global/modal';
import OneButtonModal from './common/OneButtonModal';
import DepthTestModal from './common/DepthTestModal';
import ContentListModal from './custom/ContentListModal';

export const MODAL_TYPE = {
    ONE_BUTTON: 'ONE_BUTTON',
    CUSTOM_COMOPNENT: {
        CONTENT_LIST: 'CONTENT_LIST'
    },
    DEPTH_TEST: 'DEPTH_TEST'
}

const MODAL_COMPONENTS = {
  ONE_BUTTON: OneButtonModal,
  DEPTH_TEST: DepthTestModal,
  CONTENT_LIST: ContentListModal,
//   second: SecondModal,
};

const GlobalModal = () => {
  const modalList = useRecoilValue(globalModalAtom);

  const render = useMemo(
    () =>
      modalList.map(({ type, props }, index) => {
        const ModalComponent = MODAL_COMPONENTS[type];
        return <ModalComponent key={index} {...props} />;
      }),
    [modalList]
  );

  console.log(modalList);
  if (modalList.length === 0) {
    return null;
  }
  return createPortal(<>{render}</>, document.getElementById('modal-root'))
};

export default GlobalModal;
