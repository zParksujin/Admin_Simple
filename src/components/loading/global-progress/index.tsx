import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalLoadingAtom from '@/recoil/global/loading/atom';

import BasicProgress from '@/components/loading/global-progress/basic';
import TestProgress from '@/components/loading/global-progress/test';

export const LOADING_TYPE = {
  BASIC: 'BASIC',
  TEST: 'TEST',
};

interface ILoadingComponent {
  [key: string]: () => JSX.Element | null;
}

const LOADING_COMPONENTS: ILoadingComponent = {
  BASIC: BasicProgress,
  TEST: TestProgress,
};

const GlobalProgress = (): JSX.Element | null => {
  const loading = useRecoilValue(globalLoadingAtom);

  const render = useMemo(() => {
    const LoadingComponent = LOADING_COMPONENTS[
      loading.type
    ] as typeof LOADING_COMPONENTS[typeof loading.type];
    return <LoadingComponent />;
  }, [loading]);

  return loading.type === ''
    ? null
    : createPortal(<>{render}</>, document.getElementById('loading-root') as HTMLDivElement);
};

export default GlobalProgress;
