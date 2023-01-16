import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import { ErrorBoundary } from 'react-error-boundary';
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  Page404,
  LoginPage,
  UserListPage,
  SubListPage,
  MainPage,
  ContentListPage,
  StatisticsBuyPage,
} from './elements';
import ErrorSection from '@/sections/error/Error';
import AuthGuard from '@/auth/AuthGuard';
import GlobalModal from '@/components/modal';
import GlobalProgress from '@/components/loading/global-progress';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        {
          path: 'login',
          element: (
            <AuthGuard>
              <LoginPage />
            </AuthGuard>
          ),
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        // react-router-dom으로 동작하기 때문에 Router 상위에 감싸질 경우 ErrorSection에서 home으로 보내는 page 이동이 spa 아닌 페이지 자체 이동으로 전환된다.
        <ErrorBoundary FallbackComponent={ErrorSection}>
          <AuthGuard>
            <DashboardLayout />
            <GlobalModal />
            <GlobalProgress />
          </AuthGuard>
        </ErrorBoundary>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'main', element: <MainPage /> },

        { path: 'user', element: <UserListPage /> },
        { path: 'user/subscription', element: <SubListPage /> },

        { path: 'content', element: <ContentListPage /> },

        { path: 'statistics/buy', element: <StatisticsBuyPage /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
