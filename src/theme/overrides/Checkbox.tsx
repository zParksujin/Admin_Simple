import { Theme } from '@mui/system';

import { CheckboxIcon, CheckboxCheckedIcon, CheckboxIndeterminateIcon } from './CustomIcons';

interface IOwnerState {
  ownerState: { size: string };
}

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
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
