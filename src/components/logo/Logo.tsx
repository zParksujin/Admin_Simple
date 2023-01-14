import { forwardRef, memo, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Link, SxProps, Typography } from '@mui/material';
import { useSettingsContext } from '../settings';

interface ILogo {
  disabledLink?: boolean;
  sx?: SxProps;
}

const Logo = forwardRef(({ disabledLink = false, sx, ...other }: ILogo, ref): JSX.Element => {
  const { themeLayout } = useSettingsContext();
  const isNavMini = useMemo(() => themeLayout === 'horizontal', [themeLayout]);
  // const theme = useTheme();

  // const PRIMARY_LIGHT = theme.palette.primary.light;

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = useMemo(
    () => (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 40,
          height: 40,
          display: 'flex',
          ...sx,
        }}
        {...other}
      >
        <Box component="img" width={40} src="/assets/icons/apps/ic_fancoo_logo.svg" alt="logo" />
        <Box sx={{ width: '100%', display: 'flex' }}>
          {!isNavMini && (
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                fontWeight: 'fontWeightMedium',
                alignItems: 'center',
                width: '100%',
                padding: '3px 0 0 16px',
              }}
            >
              Fancoo
            </Typography>
          )}
        </Box>
      </Box>
    ),
    [isNavMini, other, ref, sx]
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

export default memo(Logo);
