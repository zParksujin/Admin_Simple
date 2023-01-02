import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getAdminMe } from '@/api/auth';
import authAtom from '@/recoil/auth/atom';

const ME_QUERY_KEY = 'ME_QUERY';

const useMeQuery = (redirect = '', navigate) => {
  const setAuth = useSetRecoilState(authAtom);
  const MeQuery = useQuery([ME_QUERY_KEY], () => getAdminMe(), {
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: (res) => {
      setAuth(res?.data?.data);
      if (redirect === '/login') {
        navigate('/dashboard');
      }
    },
  });

  return MeQuery;
};

export default useMeQuery;
