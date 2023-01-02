import { m } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import { PageNotFoundIllustration } from '@/assets/illustrations';
import { MotionContainer, varBounce } from '@/components/animate';
// assets

// ----------------------------------------------------------------------
function ErrorSection({ error }) {
  return (
    <>
      <Helmet>
        <title> 404 Page Not Found | Minimal UI</title>
      </Helmet>
      <Container component="main">
        <Stack
          sx={{
            py: 12,
            m: 'auto',
            maxWidth: 400,
            minHeight: '100vh',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <MotionContainer>
            <m.div variants={varBounce().in}>
              <Typography variant="h3" paragraph>
                {error.message}
              </Typography>
            </m.div>

            <m.div variants={varBounce().in}>
              <Typography sx={{ color: 'text.secondary' }}>
                Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the
                URL? Be sure to check your spelling.
              </Typography>
            </m.div>

            <m.div variants={varBounce().in}>
              <PageNotFoundIllustration
                sx={{
                  height: 260,
                  my: { xs: 5, sm: 10 },
                }}
              />
            </m.div>

            <Button component={RouterLink} to="/" size="large" variant="contained">
              Go to Home
            </Button>
          </MotionContainer>
        </Stack>
      </Container>
    </>
  );
}

export default ErrorSection;
