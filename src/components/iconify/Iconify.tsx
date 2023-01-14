import React, { forwardRef } from 'react';
// icons
import { Icon, IconifyIcon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';
import { SxProps } from '@mui/system';

// ----------------------------------------------------------------------

interface Iiconify {
  icon: IconifyIcon | string;
  width?: number | string;
  sx?: SxProps | { mx: number };
  other?: any;
}

const Iconify = forwardRef(
  ({ icon, width = 20, sx, ...other }: Iiconify, ref): JSX.Element => (
    <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
  )
);

export default Iconify;
