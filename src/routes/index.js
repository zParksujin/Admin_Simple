import { Navigate, useRoutes } from 'react-router-dom';
// auth
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import AuthGuard from '../auth/AuthGuard';
// import GuestGuard from '../auth/GuestGuard';
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import { Page404, LoginPage, UserListPage, SubListPage, MainPage } from './elements';
import LoadingScreen from '@/components/loading-screen';
// import ErrorSection from '@/sections/error/Error';

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
        <AuthGuard>
          {/* <ErrorBoundary FallbackComponent={ErrorSection}> */}
          <Suspense fallback={<LoadingScreen />}>
            <DashboardLayout />
          </Suspense>
          {/* </ErrorBoundary> */}
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'main', element: <MainPage /> },
        { path: 'user', element: <UserListPage /> },
        { path: 'user/subscription', element: <SubListPage /> },
        // { path: 'detail', element: <UserDetailPage /> },
        // { path: 'one', element: <PageOne /> },
        // { path: 'two', element: <PageTwo /> },
        // { path: 'three', element: <PageThree /> },
        // {
        //   path: 'user',
        //   children: [
        //     { element: <Navigate to="/dashboard/user/list" replace />, index: true },
        //     { path: 'list', element: <UserListPage /> },
        //     { path: 'detail', element: <UserDetailPage /> },
        //   ],
        // },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
