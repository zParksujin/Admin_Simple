import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/system';

interface IOwnerState {
  ownerState: IOwnerStateItem;
}

interface IOwnerStateItem {
  variant: string;
  color: string;
}

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

export default function Pagination(theme: Theme) {
  const isLight = theme.palette.mode === 'light';

  const rootStyle = (ownerState: IOwnerStateItem) => {
    const outlinedVariant = ownerState.variant === 'outlined';

    const softVariant = ownerState.variant === 'soft';

    const defaultStyle = {
      '& .MuiPaginationItem-root': {
        ...(outlinedVariant && {
          borderColor: alpha(theme.palette.grey[500], 0.32),
        }),
        '&.Mui-selected': {
          fontWeight: (theme.typography as any).fontWeightMedium,
        },
      },
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        ...(softVariant && {
          '& .MuiPaginationItem-root': {
            '&.Mui-selected': {
              color: theme.palette[color][isLight ? 'dark' : 'light'],
              backgroundColor: alpha(theme.palette[color].main, 0.16),
              '&:hover': {
                backgroundColor: alpha(theme.palette[color].main, 0.32),
              },
            },
          },
        }),
      }),
    }));

    return [...colorStyle, defaultStyle];
  };

  return {
    MuiPagination: {
      defaultProps: {
        color: 'primary',
      },

      styleOverrides: {
        root: ({ ownerState }: IOwnerState) => rootStyle(ownerState),
      },
    },
  };
}
