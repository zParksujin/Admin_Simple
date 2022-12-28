// @mui
import { Divider, IconButton, Stack } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
// eslint-disable-next-line import/no-unresolved
import { baseURL } from 'src/api';
// eslint-disable-next-line import/no-unresolved
import { customWindowOpener } from 'src/utils/auth/customWindowOpener';
// eslint-disable-next-line import/no-unresolved
import userAtom from 'src/recoil/user/index';

// ----------------------------------------------------------------------

export default function AuthWithSocial() {
  const [user, setUser] = useRecoilState(userAtom);
  console.log(user);

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
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const workplaceCallback = useCallback(async (e) => {
    if (e?.data && typeof e?.data === 'string' && e?.data?.includes('workplace-login:')) {
        const data = JSON.parse(e.data.substring(16));
        console.log(data);
        sessionStorage.setItem('admin-access-token', data?.token?.access_token);
        sessionStorage.setItem('admin-refresh-token', data?.token?.refresh_token);
        setUser(data.userInfo);
        
        // const myMenu = await getMyMenu();
        // if (myMenu.status) {
        //     $appStore.menu = myMenu.data;
        // }
// 
        // $appStore.goMain(true);
    }
  }, [setUser])

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
