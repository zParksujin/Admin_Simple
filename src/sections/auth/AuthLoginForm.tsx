import { memo, SetStateAction, useCallback, useState } from 'react';
// @mui
import { Link, Stack, TextField, Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useRecoilValue, useSetRecoilState } from 'recoil';
// components
import { useNavigate } from 'react-router';
import { useLocales } from '@/locales';
import adminMeAtom from '@/recoil/me/atom';
import { checkMyIpSelector } from '@/recoil/check-my-ip';
import { adminLogin } from '@/api/auth';
import setToken from '@/utils/auth/setToken';

function AuthLoginForm() {
  const { t } = useLocales();
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(adminMeAtom);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const userIP = useRecoilValue(checkMyIpSelector);

  const onChangeEmail = useCallback(
    (e: { currentTarget: { value: SetStateAction<string> } }) => {
      setEmail(e.currentTarget.value);
    },
    [setEmail]
  );

  const onChangePW = useCallback(
    (e: { currentTarget: { value: SetStateAction<string> } }) => {
      setPw(e.currentTarget.value);
    },
    [setPw]
  );

  const login = useCallback(
    async (e: { preventDefault: () => void }) => {
      e.preventDefault();
      if (email.length === 0) {
        // eslint-disable-next-line no-alert
        alert('아이디를 입력해 주세요.'); // TODO 모달로 변경
        return;
      }

      if (pw.length === 0) {
        // eslint-disable-next-line no-alert
        alert('비밀번호를 입력해 주세요.');
        return;
      }

      const result = await adminLogin({
        login_id: email,
        password: pw,
      });

      if (!result?.status) {
        // eslint-disable-next-line no-alert
        alert(result.message);
        return;
      }

      setToken(result.data.token);
      setAuth(result.data.userInfo);

      navigate('/dashboard/main');
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
            {t('login.connectIp')} : {userIP.ip || ''}
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
