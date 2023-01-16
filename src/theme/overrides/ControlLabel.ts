import { Theme } from '@mui/system';

export default function ControlLabel(theme: Theme) {
  return {
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...(theme.typography as any).body2,
        },
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        component: 'div',
      },
      styleOverrides: {
        root: {
          marginTop: theme.spacing(1),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: theme.palette.text.disabled,
        },
      },
    },
  };
}
