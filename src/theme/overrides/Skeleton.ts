import { Theme } from '@mui/system';

export default function Skeleton(theme: Theme) {
  return {
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  };
}
