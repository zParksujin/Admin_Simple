import React, { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import globalLoading from '@/recoil/global/loading';

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
  const { type } = useRecoilValue(globalLoading);

  const render = useMemo(() => {
    const LoadingComponent = LOADING_COMPONENTS[type] as typeof LOADING_COMPONENTS[typeof type];
    return <LoadingComponent />;
  }, [type]);

  return type === ''
    ? null
    : createPortal(<>{render}</>, document.getElementById('loading-root') as HTMLDivElement);
};

export default GlobalProgress;
