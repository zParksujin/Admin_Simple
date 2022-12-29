import { useQuery } from 'react-query';
import { getAdminMe } from '@/api/auth';

const useMeQuery = () => {
  const MeQuery = useQuery(['ME_QUERY'], () => getAdminMe(), {
    refetchOnWindowFocus: false,
    enabled: false,
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return MeQuery;
};

export default useMeQuery;
