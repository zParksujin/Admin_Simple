import React, { ReactNode } from 'react';
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
import { ThemeSettings, SettingsProvider } from '@/components/settings';
import ScrollToTop from '@/components/scroll-to-top';

// Check our docs

import DebugObserver from '@/utils/debug/recoil';

interface IRootProviderProps {
  children?: ReactNode;
}

const RootProvider = ({ children }: IRootProviderProps) => (
  <RecoilRoot>
    <BrowserRouter>
      <HelmetProvider>{children}</HelmetProvider>
    </BrowserRouter>
  </RecoilRoot>
);

function App() {
  return (
    <RootProvider>
      <SettingsProvider>
        <ScrollToTop />
        <ThemeProvider>
          <ThemeSettings>
            <ThemeLocalization>
              <Router />
              <DebugObserver />
            </ThemeLocalization>
          </ThemeSettings>
        </ThemeProvider>
      </SettingsProvider>
    </RootProvider>
  );
}

export default App;
