//
import { Theme } from '@mui/system';
import { RadioIcon, RadioCheckedIcon } from './CustomIcons';

interface IOwnerState {
  ownerState: { size: string };
}

export default function Radio(theme: Theme) {
  return {
    MuiRadio: {
      defaultProps: {
        icon: <RadioIcon />,
        checkedIcon: <RadioCheckedIcon />,
      },

      styleOverrides: {
        root: ({ ownerState }: IOwnerState) => ({
          padding: theme.spacing(1),
          ...(ownerState.size === 'small' && {
            '& svg': { width: 20, height: 20 },
          }),
          ...(ownerState.size === 'medium' && {
            '& svg': { width: 24, height: 24 },
          }),
        }),
      },
    },
  };
}
