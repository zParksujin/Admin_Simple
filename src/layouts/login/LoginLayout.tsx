// @mui
import { Typography, Stack } from '@mui/material';
// components
import { ReactNode } from 'react';
import Logo from '@/components/logo';
import Image from '@/components/image';
//
import { StyledRoot, StyledSectionBg, StyledSection, StyledContent } from './styles';

// ----------------------------------------------------------------------
interface ILoginLayout {
  title: string;
  children?: ReactNode;
  illustration: string;
}

export default function LoginLayout({ children, illustration, title }: ILoginLayout) {
  return (
    <StyledRoot>
      <Logo
        sx={{
          zIndex: 9,
          position: 'absolute',
          mt: { xs: 1.5, md: 5 },
          ml: { xs: 2, md: 5 },
        }}
      />

      <StyledSection>
        <Typography variant="h3" sx={{ mb: 10, maxWidth: 480, textAlign: 'center' }}>
          {title || 'Hi, Welcome back'}
        </Typography>

        <Image
          disabledEffect
          // visibleByDefault
          alt="auth"
          src={illustration || '/assets/illustrations/illustration_dashboard.png'}
          sx={{ maxWidth: 720 }}
        />

        <StyledSectionBg />
      </StyledSection>

      <StyledContent>
        <Stack sx={{ width: 1 }}> {children && children} </Stack>
      </StyledContent>
    </StyledRoot>
  );
}
