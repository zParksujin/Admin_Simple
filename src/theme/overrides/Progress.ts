import { alpha } from '@mui/material';
import { Theme } from '@mui/system';

interface IOwnerState {
  ownerState: IOwnerStateItem;
}

interface IOwnerStateItem {
  variant: string;
  color: string;
}

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

export default function Progress(theme: Theme) {
  const rootStyle = (ownerState: IOwnerStateItem) => {
    const bufferVariant = ownerState.variant === 'buffer';

    const defaultStyle = {
      borderRadius: 4,
      '& .MuiLinearProgress-bar': {
        borderRadius: 4,
      },
      ...(bufferVariant && {
        backgroundColor: 'transparent',
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        backgroundColor: alpha(theme.palette[color].main, 0.24),
      }),
    }));

    return [...colorStyle, defaultStyle];
  };

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ ownerState }: IOwnerState) => rootStyle(ownerState),
      },
    },
  };
}
