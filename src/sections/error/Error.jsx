import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Button, Container, Stack, Typography } from '@mui/material';
// components
import { PageNotFoundIllustration } from '@/assets/illustrations';
// assets

// ----------------------------------------------------------------------
function ErrorSection({error}, info) {
                console.log(error, info);
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
          <Container>
              <Typography variant="h3" paragraph>
                {error?.message}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}>
                Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the
                URL? Be sure to check your spelling.
              </Typography>

              <PageNotFoundIllustration
                sx={{
                  height: 260,
                  my: { xs: 5, sm: 10 },
                }}
              />

            <Button component={RouterLink} to="/" size="large" variant="contained">
              Go to Home
            </Button>
          </Container>
        </Stack>
      </Container>
    </>
  );
}

export default ErrorSection;
