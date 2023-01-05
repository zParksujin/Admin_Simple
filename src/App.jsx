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
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from '@/routes';
// theme
import ThemeProvider from '@/theme';
// locales
import ThemeLocalization from '@/locales';
// components
import SnackbarProvider from '@/components/snackbar';
import { ThemeSettings, SettingsProvider } from '@/components/settings';
import { MotionLazyContainer } from '@/components/animate';
import ScrollToTop from '@/components/scroll-to-top';

// Check our docs

import DebugObserver from '@/utils/debug/recoil';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1 * 60 * 1000,
    },
  },
});

const RootProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>{children}</HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  </QueryClientProvider>
);

export default function App() {
  return (
    <RootProvider>
      <SettingsProvider>
        <ScrollToTop />
        <MotionLazyContainer>
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
        </MotionLazyContainer>
      </SettingsProvider>
    </RootProvider>
  );
}
