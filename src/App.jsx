// i18n
import './locales/i18n';

// scroll bar
import 'simplebar/src/simplebar.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import { RecoilRoot } from 'recoil';
import Router from '@/routes';
// theme
import ThemeProvider from '@/theme';
// locales
import ThemeLocalization from '@/locales';
// components
import SnackbarProvider from '@/components/snackbar';
import { ThemeSettings, SettingsProvider } from '@/components/settings';
import ScrollToTop from '@/components/scroll-to-top';

// Check our docs

import DebugObserver from '@/utils/debug/recoil';

const RootProvider = ({ children }) => (
  <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>{children}</HelmetProvider>
      </BrowserRouter>
  </RecoilRoot>
);

export default function App() {
  return (
    <RootProvider>
      <SettingsProvider>
        <ScrollToTop />
          <ThemeProvider>
            <ThemeSettings>
              <ThemeLocalization>
                <SnackbarProvider>
                  <Router />
                  <DebugObserver />
                </SnackbarProvider>
              </ThemeLocalization>
            </ThemeSettings>
          </ThemeProvider>
      </SettingsProvider>
    </RootProvider>
  );
}
