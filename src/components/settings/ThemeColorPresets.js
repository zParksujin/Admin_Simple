import PropTypes from 'prop-types';
import merge from 'lodash/merge';
import { useMemo } from 'react';
// @mui
import { alpha, ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
//
import { useSettingsContext } from './SettingsContext';
import { getPresets } from './presets';

// ----------------------------------------------------------------------

ThemeColorPresets.propTypes = {
  children: PropTypes.node,
};

export default function ThemeColorPresets({ children }) {
  const outerTheme = useTheme();

  const { themeMode } = useSettingsContext();

  const themeOptions = useMemo(() => {
    const presetsColor = getPresets(themeMode === 'light' ? 'black' : 'white');

    return {
      palette: {
        primary: presetsColor,
      },
      customShadows: {
        primary: `0 8px 16px 0 ${alpha(presetsColor.main, 0.24)}`,
      },
    };
  }, [themeMode]);

  const theme = createTheme(merge(outerTheme, themeOptions));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
