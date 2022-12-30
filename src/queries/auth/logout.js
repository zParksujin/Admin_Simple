import { useMutation } from 'react-query';
import { adminLogout } from '@/api/auth';
import { clearSession } from '@/api';

const LOGOUT_KEY = 'LOGOUT';

const useLogout = () => {
  const LogoutQuery = useMutation([LOGOUT_KEY], adminLogout, {
    enabled: false,
    onSuccess: () => {
      clearSession();
    },
  });

  return LogoutQuery;
};

export default useLogout;
