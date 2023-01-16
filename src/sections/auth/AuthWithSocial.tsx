import { memo, useCallback, useEffect } from 'react';
import { Divider, IconButton, Stack } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import adminMeAtom from 'src/recoil/me';
import { useNavigate } from 'react-router';
import { customWindowOpener } from '@/utils/auth/customWindowOpener';
import { baseURL } from '@/api';
import setToken from '@/utils/auth/setToken';
import { IAdminLoginToken } from '@/api/auth/type';

function AuthWithSocial() {
  const setMe = useSetRecoilState(adminMeAtom);
  const navigate = useNavigate();

  const workplaceLogin = () => {
    customWindowOpener(`${baseURL}/v1/admins/oauth/login`, 'WORKPLACE-LOGIN', {
      width: 500,
      height: 700,
    });
  };

  useEffect(() => {
    window.addEventListener('message', workplaceCallback, false);
    return () => {
      window.removeEventListener('message', workplaceCallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const workplaceCallback = useCallback(
    async (e: { data: string | IAdminLoginToken | string[] }) => {
      if (e?.data && typeof e?.data === 'string' && e?.data?.includes('workplace-login:')) {
        const data = setToken(e.data);
        setMe(data.userInfo);

        navigate('/dashboard/main');
      }
    },
    [navigate, setMe]
  );

  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton
          size="large"
          onClick={workplaceLogin}
          sx={{
            borderRadius: 1,
          }}
        >
          <img src="/assets/icons/apps/ic_workplace.svg" alt="workplace" />
        </IconButton>
      </Stack>
    </div>
  );
}
export default memo(AuthWithSocial);
