// @mui
import { Stack, Typography } from '@mui/material';
import { useLocales } from '@/locales';
// layouts
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';

export default function Login() {
  const { t } = useLocales();

  return (
    <LoginLayout title={t('login.main')}>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">{t('login.signIn')}</Typography>
      </Stack>
      <AuthLoginForm />
      <AuthWithSocial />
    </LoginLayout>
  );
}
