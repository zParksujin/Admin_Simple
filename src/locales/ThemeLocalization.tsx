import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
//
import { ReactNode } from 'react';
import useLocales from './useLocales';

// ----------------------------------------------------------------------

interface IThemeLocalization {
  children: ReactNode;
}

export default function ThemeLocalization({ children }: IThemeLocalization) {
  const outerTheme = useTheme();

  const { currentLang } = useLocales();

  const theme = createTheme(outerTheme, currentLang.systemValue);

  return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}
