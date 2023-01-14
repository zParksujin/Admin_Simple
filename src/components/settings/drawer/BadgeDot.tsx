import React from 'react';
import { Box } from '@mui/material';
import { SxProps } from '@mui/system';

interface IBadgeDot {
  sx?: SxProps;
  other?: any;
}

function BadgeDot({ sx, ...other }: IBadgeDot): JSX.Element {
  return (
    <Box
      sx={{
        top: 6,
        right: 4,
        width: 8,
        height: 8,
        borderRadius: '50%',
        position: 'absolute',
        bgcolor: 'error.main',
        ...sx,
      }}
      {...other}
    />
  );
}

export default BadgeDot;
