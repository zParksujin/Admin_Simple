import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/system';

export default function Drawer(theme: Theme) {
  const isLight = theme.palette.mode === 'light';
  interface IOwnerState {
    ownerState: { variant: string };
  }
  return {
    MuiDrawer: {
      styleOverrides: {
        root: ({ ownerState }: IOwnerState) => ({
          ...(ownerState.variant === 'temporary' && {
            '& .MuiDrawer-paper': {
              boxShadow: `-40px 40px 80px -8px ${alpha(
                isLight ? theme.palette.grey[500] : theme.palette.common.black,
                0.24
              )}`,
            },
          }),
        }),
      },
    },
  };
}
