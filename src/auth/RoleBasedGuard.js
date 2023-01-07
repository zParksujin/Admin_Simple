import PropTypes from 'prop-types';
// @mui
import { Container, Typography } from '@mui/material';
// components
// assets
import { ForbiddenIllustration } from '../assets/illustrations';
//
// import { useAuthContext } from './useAuthContext';

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  children: PropTypes.node,
  hasContent: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string),
};

export default function RoleBasedGuard({ hasContent, roles, children }) {
  // Logic here to get current user role
  // const { user } = useAuthContext();

  // const currentRole = 'user';
  // const currentRole = user?.role; // admin;
  const currentRole = 'admin'; // admin;

  if (typeof roles !== 'undefined' && !roles.includes(currentRole)) {
    return hasContent ? (
      <Container component="div" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" paragraph>
          Permission Denied
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          You do not have permission to access this page
        </Typography>

        <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
      </Container>
    ) : null;
  }

  return <> {children} </>;
}
