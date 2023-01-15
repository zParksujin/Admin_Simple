import React, { Suspense } from 'react';
import LoadingScreen from '@/components/loading/loading-screen';

const Loadable = (Component: () => JSX.Element) => (props: JSX.IntrinsicAttributes) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
