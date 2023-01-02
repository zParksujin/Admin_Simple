import { Suspense, lazy } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const MainPage = Loadable(lazy(() => import('@/pages/main')));
export const LoginPage = Loadable(lazy(() => import('@/pages/auth/LoginPage')));

export const UserListPage = Loadable(lazy(() => import('@/pages/user/list')));
export const SubListPage = Loadable(lazy(() => import('@/pages/user/subList')));

export const Page404 = Loadable(lazy(() => import('@/pages/error/Page404')));
