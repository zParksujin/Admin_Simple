import { useRecoilCallback } from 'recoil';
import { getAdminMe } from '@/api/auth';
import adminMeAtom from '@/recoil/me/atom';
import { clearSession } from '@/api';

const useMe = (redirect = '', navigate) => {
  const setMe = useRecoilCallback(({ set }) => async () => {
    await getAdminMe()
      .then((res) => {
        set(adminMeAtom, res?.data?.data);
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
