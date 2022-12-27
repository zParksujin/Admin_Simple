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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
//   async function workplaceCallback(e) {
//     if (e?.data && typeof e?.data === 'string' && e?.data?.includes('workplace-login:')) {
//         const data = JSON.parse(e.data.substring(16));
//         console.log(data);
//         sessionStorage.setItem('adminAccessToken', data?.token?.access_token);
//         sessionStorage.setItem('adminRefreshToken', data?.token?.refresh_token);
//         setUser(data.userInfo);
//         // sessionStorage.setItem('userInfo', data.userInfo);
//         // $userStore.setToken(data.token);
//         // $userStore.setUserInfo(data.userInfo);
// // 
//         // const myMenu = await getMyMenu();
//         // if (myMenu.status) {
//         //     $appStore.menu = myMenu.data;
//         // }
// // 
//         // $appStore.goMain(true);
//     }
// }

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
        {/* <IconButton onClick={handleGoogleLogin}>
          <Iconify icon="eva:google-fill" color="#DF3E30" />
        </IconButton>

        <IconButton color="inherit" onClick={handleGithubLogin}>
          <Iconify icon="eva:github-fill" />
        </IconButton>

        <IconButton onClick={handleTwitterLogin}>
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
        </IconButton> */}
        <IconButton
          size="large"
          onClick={workplaceLogin}
          sx={{
            borderRadius: 1,
          }}
        >
          <img src="/assets/icons/apps/ic_workplace.svg" alt="workplace" />
          {/* <Iconify icon="eva:workplace-fill" color="#1C9CEA" /> */}
        </IconButton>
      </Stack>
    </div>
  );
}
