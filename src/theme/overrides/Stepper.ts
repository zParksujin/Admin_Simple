import { Theme } from '@mui/system';

export default function Stepper(theme: Theme) {
  return {
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: theme.palette.divider,
        },
      },
    },
  };
}
