import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { clearSession } from '@/api';
import useMe from '@/recoil/me/hook/useMe';

interface IAuthGuard {
  children?: ReactNode;
  // any props that come into the component
}

function AuthGuard({ children }: IAuthGuard): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const { setMe } = useMe(location.pathname, navigate);
  // const pageAccessedByReload =
  //   (window.performance.navigation && window.performance.navigation.type === 1) ||
  //   window.performance
  //     .getEntriesByType('navigation')
  //     .map((nav) => nav.type)
  //     .includes('reload');

  useEffect(() => {
    const token = localStorage.getItem('admin_access_token');

    if (
      // pageAccessedByReload &&
      !window?.name &&
      token &&
      typeof token === 'string' &&
      token?.length > 0
    ) {
      setMe();
    } else if (
      location.pathname !== '/login' &&
      (!token || typeof token !== 'string' || token?.length === 0)
    ) {
      clearSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return <> {children} </>;
}

export default AuthGuard;
