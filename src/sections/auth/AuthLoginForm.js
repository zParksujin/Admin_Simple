import { memo, useCallback, useState } from 'react';
// @mui
import { Link, Stack, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useSetRecoilState } from 'recoil';
// components
import { useLocales } from '@/locales';
import userAtom from '@/recoil/user/atom';

// ----------------------------------------------------------------------

function AuthLoginForm() {
  const { t } = useLocales();
  const setUser = useSetRecoilState(userAtom);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const onChangeEmail = useCallback(
    (e) => {
      setEmail(e.currentTarget.value);
    },
    [setEmail]
  );

  const onChangePW = useCallback(
    (e) => {
      setPw(e.currentTarget.value);
    },
    [setPw]
  );

  const login = useCallback(
    async (e) => {
      e.preventDefault();
      if (email.length === 0) {
        alert('아이디를 입력해 주세요.'); // TODO 모달로 변경
        return;
      }

      if (pw.length === 0) {
        alert('비밀번호를 입력해 주세요.');
        return;
      }

      const result = {};
      //   const result = await adminLogin({
      //     login_id: id.value,
      //     password: pw.value
      // });

      if (!result?.status) {
        alert(result.message);
        return;
      }

      console.log(result);

      // sessionStorage.setItem('admin-access-token', data?.token?.access_token);
      // sessionStorage.setItem('admin-refresh-token', data?.token?.refresh_token);
      setUser(result.data.userInfo);

      // const myMenu = await getMyMenu();
      // if (myMenu.status) {
      //     $appStore.menu = myMenu.data;
      // }

      // $appStore.goMain(true);
    },
    [email.length, pw.length, setUser]
  );

  return (
    <Box>
      <form onSubmit={login}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            name="email"
            value={email}
            label="Email"
            type="text"
            onChange={onChangeEmail}
          />
          <TextField
            fullWidth
            name="password"
            value={pw}
            label="Password"
            type="password"
            onChange={onChangePW}
            // error={!!error}
            // helperText={error ? error?.message : helperText}
          />
        </Stack>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
          <Box>{t('login.connectIp')} : 15.15.52.24</Box>
          <Link variant="body2" color="inherit" underline="always">
            {t('login.findPw')}
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          // loading={isSubmitSuccessful || isSubmitting}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          {t('login.login')}
        </LoadingButton>
      </form>
    </Box>
  );
}

export default memo(AuthLoginForm);
