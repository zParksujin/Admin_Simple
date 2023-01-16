import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/system';

// ----------------------------------------------------------------------

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& span.MuiAutocomplete-tag': {
            ...(theme.typography as any).body2,
            width: 24,
            height: 24,
            lineHeight: '24px',
            textAlign: 'center',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
        },
        paper: {
          boxShadow: (theme as any).customShadows.dropdown,
        },
        listbox: {
          padding: theme.spacing(0, 1),
        },
        option: {
          ...(theme.typography as any).body2,
          padding: theme.spacing(1),
          margin: theme.spacing(0.75, 0),
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  };
}
