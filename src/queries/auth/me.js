import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getAdminMe } from '@/api/auth';
import userAtom from '@/recoil/user/atom';

const ME_QUERY_KEY = 'ME_QUERY';

const useMeQuery = (redirect = '', navigate) => {
  const setUser = useSetRecoilState(userAtom);
  const MeQuery = useQuery([ME_QUERY_KEY], () => getAdminMe(), {
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: (res) => {
      setUser(res?.data?.data);
      if (redirect === '/login') {
        navigate('/dashboard');
      }
    },
  });

  return MeQuery;
};

export default useMeQuery;
