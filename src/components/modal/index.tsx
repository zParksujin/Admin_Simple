// @ts-nocheck
import React, { lazy, Suspense, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalModalAtom from '@/recoil/global/modal';
import OneButtonModal from './common/OneButtonModal';
import DepthTestModal from './common/DepthTestModal';
import BanLayerModal from './custom/BanLayerModal';

const Loadable = (Component: typeof React.Component) => (props: any) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

const BanProccessLayerModal = Loadable(
  lazy(() => import('@/components/modal/custom/block-process-layer'))
);

export const MODAL_TYPE = {
  ONE_BUTTON: 'ONE_BUTTON',
  CUSTOM_COMOPNENT: {
    BAN_LAYER: 'BAN_LAYER',
    BAN_PROCCESS_LAYER: 'BAN_PROCCESS_LAYER',
  },
  DEPTH_TEST: 'DEPTH_TEST',
};

interface IModalComponent {
  [key: string]: (props: any) => JSX.Element | null;
}

const MODAL_COMPONENTS: IModalComponent = {
  ONE_BUTTON: OneButtonModal,
  DEPTH_TEST: DepthTestModal,
  BAN_LAYER: BanLayerModal,
  BAN_PROCCESS_LAYER: BanProccessLayerModal,
};

const GlobalModal = (): JSX.Element | null => {
  const modalList = useRecoilValue(globalModalAtom);

  const render = useMemo(
    () =>
      modalList.map(({ type, props }, index) => {
        const ModalComponent = MODAL_COMPONENTS[type] as typeof MODAL_COMPONENTS[typeof type];
        return <ModalComponent key={index} {...(props as object)} />;
      }),
    [modalList]
  );

  return modalList.length === 0
    ? null
    : createPortal(<>{render}</>, document.getElementById('modal-root') as HTMLDivElement);
};

export default GlobalModal;
