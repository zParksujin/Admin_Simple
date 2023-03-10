import React, { Suspense } from 'react';
import LoadingScreen from '@/components/loading/loading-screen';

 const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={<LoadingScreen />}
      // fallback={<Lazy />}
    >
      <Component {...props} />
    </Suspense>
  );
  
  export default Loadable;