import { Suspense, lazy, LazyExoticComponent } from 'react';
// components
import LoadingScreen from '../components/loading/loading-screen';

// ----------------------------------------------------------------------

const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );

// ----------------------------------------------------------------------

export const MainPage = Loadable(lazy(() => import('@/pages/main')));
export const LoginPage = Loadable(lazy(() => import('@/pages/auth/LoginPage')));

export const UserListPage = Loadable(lazy(() => import('@/pages/user/user-list')));
export const SubListPage = Loadable(lazy(() => import('@/pages/user/sub-list')));

export const ContentListPage = Loadable(lazy(() => import('@/pages/content/content-list')));

export const StatisticsBuyPage = Loadable(lazy(() => import('@/pages/statistics/statistics-buy')));

export const Page404 = Loadable(lazy(() => import('@/pages/error/Page404')));
