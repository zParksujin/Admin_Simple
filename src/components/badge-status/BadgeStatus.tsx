// @mui
import { useTheme } from '@mui/material/styles';
//
import { StyledBadgeStatus } from './styles';

// ----------------------------------------------------------------------

interface IBadgeStatus {
  sx: Record<string, string | number>;
  size: 'small' | 'medium' | 'large';
  status: 'away' | 'busy' | 'unread' | 'online' | 'offline' | 'invisible';
}

export default function BadgeStatus({ size = 'medium', status = 'offline', sx }: IBadgeStatus) {
  const theme = useTheme();

  return <StyledBadgeStatus ownerState={{ status, size }} sx={sx} theme={theme} />;
}
