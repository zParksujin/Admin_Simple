import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton, Button } from '@mui/material';
// utils
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import { bgBlur } from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';
import useGlobalModal from '@/utils/hooks/global/modal/useGlobalModal';
import { MODAL_TYPE } from '@/components/modal';
import { LOADING_TYPE } from '@/components/loading/global-progress';
import useGlobalLoading from '@/utils/hooks/global/loading/useGlobalLoading';
import { menuSelector } from '@/recoil/menu';

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ onOpenNav }) {
  const theme = useTheme();
  const { setModal } = useGlobalModal();
  const { setLoading } = useGlobalLoading();
  const refresh = useRecoilRefresher_UNSTABLE(menuSelector);

  const { themeLayout } = useSettingsContext();

  const isNavHorizontal = themeLayout === 'horizontal';

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg');

  const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

  const renderContent = (
    <>
      {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <Button onClick={() => refresh()}>Refresh Test</Button>
        <Button
          onClick={() =>
            setModal({
              type: MODAL_TYPE.DEPTH_TEST,
              props: {
                // cb: () => alert('modal test'),
              },
            })
          }
        >
          Modal Depth Test
        </Button>
        <Button
          onClick={() =>
            setLoading({
              type: LOADING_TYPE.TEST,
              props: {
                // cb: () => alert('modal test'),
              },
            })
          }
        >
          Global Loading Test
        </Button>
        <LanguagePopover />

        <NotificationsPopover />

        <ContactsPopover />

        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(isDesktop && {
          width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
          height: HEADER.H_DASHBOARD_DESKTOP,
          ...(isOffset && {
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
