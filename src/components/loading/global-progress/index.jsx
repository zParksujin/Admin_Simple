import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalLoadingAtom from '@/recoil/global/loading/atom';

import BasicProgress from '@/components/loading/global-progress/basic';
import TestProgress from '@/components/loading/global-progress/test';


export const LOADING_TYPE = {
    BASIC: 'BASIC',
    TEST: 'TEST',
}

const LOADING_COMPONENTS = {
    BASIC: BasicProgress,
    TEST: TestProgress,
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
