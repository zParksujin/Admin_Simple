import { memo, useCallback, useState } from 'react';
// @mui
import { Link, Stack, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useRecoilValue, useSetRecoilState } from 'recoil';
// components
import { useNavigate } from 'react-router';
import { useLocales } from '@/locales';
import authAtom from '@/recoil/auth/atom';
import { checkMyIpSelector } from '@/recoil/check-my-ip';
import { adminLogin } from '@/api/auth';
import setToken from '@/utils/auth/setToken';

function AuthLoginForm() {
  const { t } = useLocales();
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authAtom);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const userIP = useRecoilValue(checkMyIpSelector);

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

      const result = await adminLogin({
        login_id: email,
        password: pw,
      });

      if (!result?.status) {
        alert(result.message);
        return;
      }

      setToken(result.data);
      setAuth(result.data.userInfo);

      navigate('/dashboard');
    },
    [email, navigate, pw, setAuth]
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
          <Box>
            {t('login.connectIp')} : {userIP?.data?.ip || ''}
          </Box>
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
