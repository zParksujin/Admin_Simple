import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { clearSession } from '@/api';
import useMe from '@/recoil/me/hook/useMe';

function AuthGuard({ children }) {
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

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
