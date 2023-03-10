// @mui
import { styled, alpha } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import adminMeAtom from '@/recoil/me/atom';
import { CustomAvatar } from '@/components/custom-avatar';
// auth
// import { useAuthContext } from '../../../auth/useAuthContext';
// components
// import { CustomAvatar } from '../../../components/custom-avatar';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

function NavAccount() {
  const me = useRecoilValue(adminMeAtom);

  return (
    <StyledRoot>
      <CustomAvatar src={me?.profileimg_url} alt={me?.name} name={me?.name} />

      <Box sx={{ ml: 2, minWidth: 0 }}>
        <Typography variant="subtitle2" noWrap>
          {me?.name}
        </Typography>

        <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
          {me?.permission_name}
        </Typography>
      </Box>
    </StyledRoot>
  );
}

export default NavAccount;
