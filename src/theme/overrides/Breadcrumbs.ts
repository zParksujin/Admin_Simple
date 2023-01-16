import { Theme } from '@mui/system';

export default function Breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginLeft: theme.spacing(2),
          marginRight: theme.spacing(2),
        },
        li: {
          display: 'inline-flex',
          margin: theme.spacing(0.25, 0),
          '& > *': {
            ...(theme.typography as any).body2,
          },
        },
      },
    },
  };
}
