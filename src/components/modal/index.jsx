import React, { lazy, Suspense, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalModalAtom from '@/recoil/global/modal';
import OneButtonModal from './common/OneButtonModal';
import DepthTestModal from './common/DepthTestModal';
// import BanProccessLayerModal from './custom/BanProccessLayerModal';
import BanLayerModal from './custom/BanLayerModal';

const Loadable = (Component) => (props) =>
  (
    <Suspense 
    // fallback={<LoadingScreen />}
    >
      <Component {...props} />
    </Suspense>
  );

const BanProccessLayerModal = Loadable(lazy(() => import('@/components/modal/custom/BanProccessLayerModal')))

export const MODAL_TYPE = {
    ONE_BUTTON: 'ONE_BUTTON',
    CUSTOM_COMOPNENT: {
        BAN_LAYER: 'BAN_LAYER',
        BAN_PROCCESS_LAYER: 'BAN_PROCCESS_LAYER',
    },
    DEPTH_TEST: 'DEPTH_TEST'
}

const MODAL_COMPONENTS = {
  ONE_BUTTON: OneButtonModal,
  DEPTH_TEST: DepthTestModal,
  BAN_LAYER: BanLayerModal,
  BAN_PROCCESS_LAYER: BanProccessLayerModal,
};

const GlobalModal = () => {
  const modalList = useRecoilValue(globalModalAtom);

  const render = useMemo(
    () =>
      modalList.map(({ type, props }, index) => {
        console.log('type', type);
        const ModalComponent = MODAL_COMPONENTS[type];
        return <ModalComponent key={index} {...props} />;
      }),
    [modalList]
  );

  console.log('modalList', modalList);
  console.log(render);
  if (modalList.length === 0) {
    return null;
  }
  return createPortal(<>{render}</>, document.getElementById('modal-root'))
};

export default GlobalModal;
