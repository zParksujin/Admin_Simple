import { useLocation } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// auth
// import { useAuthContext } from '../../auth/useAuthContext';
//
import { useSettingsContext } from '../../settings';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function LoadingScreen(): JSX.Element {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  // const { isInitialized } = useAuthContext();

  const { themeLayout } = useSettingsContext();

  const isDashboard = pathname.includes('/dashboard') && isDesktop;
  // const isDashboard = isInitialized && pathname.includes('/dashboard') && isDesktop;

  const size =
    (themeLayout === 'mini' && NAV.W_DASHBOARD_MINI) ||
    (themeLayout === 'vertical' && NAV.W_DASHBOARD) ||
    128;

  return (
    <StyledRoot
      sx={{
        ...(isDashboard && {
          width: `calc(100% - ${size}px)`,
          ...(themeLayout === 'horizontal' && {
            width: 1,
            height: `calc(100% - ${size}px)`,
          }),
        }),
      }}
    >
      <LinearProgress color="inherit" sx={{ width: 1, maxWidth: 360 }} />
    </StyledRoot>
  );
}
