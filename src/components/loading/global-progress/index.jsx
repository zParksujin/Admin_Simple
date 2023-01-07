import React, { lazy, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalLoadingAtom from '@/recoil/global/loading/atom';

const BasicLoading = lazy(() => import('@/components/loading/global-progress/basic'))

export const LOADING_TYPE = {
    BASIC: 'BASIC',
}

const LOADING_COMPONENTS = {
    BASIC: BasicLoading,
};

const GlobalProgress = () => {
  const loading = useRecoilValue(globalLoadingAtom);

  const render = useMemo(
    () =>{
        if (!loading?.type) {
          return null;
        }
        console.log('LoadingComponent', loading?.type);
        const LoadingComponent = LOADING_COMPONENTS[loading?.type];
        return <LoadingComponent />;
      },
    [loading]
  );

  if (!loading?.type) {
    return null;
  }

  return createPortal(<>{render}</>, document.getElementById('loading-root'))
};

export default GlobalProgress;
