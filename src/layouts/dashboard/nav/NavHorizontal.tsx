import { memo } from 'react';
// @mui
import { SxProps, useTheme } from '@mui/material/styles';
import { AppBar, Box, Toolbar } from '@mui/material';
// config
import { HEADER } from '../../../config-global';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import { NavSectionHorizontal } from '../../../components/nav-section';

function NavHorizontal() {
  const theme = useTheme();

  return (
    <AppBar
      component="nav"
      color="transparent"
      sx={{
        boxShadow: 0,
        top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
      }}
    >
      <Toolbar
        sx={
          {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
          } as any
        }
      >
        <NavSectionHorizontal />
      </Toolbar>

      <Shadow />
    </AppBar>
  );
}

export default memo(NavHorizontal);

interface INavSectionMini {
  sx?: SxProps;
}

function Shadow({ sx, ...other }: INavSectionMini) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        width: 1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        boxShadow: (theme) => (theme as any).customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
