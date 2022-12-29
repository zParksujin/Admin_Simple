import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { clearSession } from '@/api';
import useMeQuery from '@/queries/me';

/**
 * TODO
 * 두 가지 뺄 수 있다면 좋겠다. 훅으로!
 * 토큰 체크
 * -> 없다면 /login 밀어내기 [/login이 아니라면]
 * -> 있다면 /dashboard 밀어내기 [/dashboard가 아니라면]
 * -> meAtom 불러내서 유저 정보 저장
 *
 * 만료는 요청시에 하면 모든 페이지에서 자동으로 밀어지기 떄문에 체크 할 필요가 없음
 * 만료 토큰 체크 -> 토큰 존재할 경우에만
 * -> 만료 /login 밀어내기 [/login이 아니라면]
 * -> 토큰 삭제하기
 * -> 유효
 * -> 새 토큰 불러와진다면? 새 토큰 저장 아니면 그대로 쓰기
 * -> meAtom 불러내서 유저 정보 저장
 */
function AuthGuard({ children }) {
  // const navigate = useNavigate();
  const location = useLocation();
  const { refetch } = useMeQuery();
  const pageAccessedByReload =
    (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload');

  useEffect(() => {
    const token = localStorage.getItem('admin_access_token');
    console.log('새로고침 ', pageAccessedByReload, location.pathname);

    if (
      pageAccessedByReload &&
      !window?.name &&
      location.pathname === '/login' &&
      token &&
      typeof token === 'string' &&
      token?.length > 0
    ) {
      refetch(); // TODO 적용 후 push
    } else if (
      location.pathname !== '/login' &&
      (!token || typeof token !== 'string' || token?.length === 0)
    ) {
      clearSession();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <> {children} </>;
}

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default AuthGuard;
