import { useRecoilCallback } from 'recoil';
import { NavigateFunction } from 'react-router';
import { getAdminMe } from '@/api/auth';
import adminMeAtom from '@/recoil/me/atom';
import { clearSession } from '@/api';

const useMe = (redirect = '', navigate: NavigateFunction) => {
  const setMe = useRecoilCallback(({ set }) => async () => {
    await getAdminMe()
      .then((res) => {
        set(adminMeAtom, res?.data);
        if (redirect === '/login') {
          navigate('/dashboard/main');
        }
      })
      .catch(() => {
        clearSession();
      });
  });

  return { setMe };
};

export default useMe;
