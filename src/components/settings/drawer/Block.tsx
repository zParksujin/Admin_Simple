import React, { ReactNode } from 'react';
import { Stack, SxProps, Tooltip, Typography } from '@mui/material';
import Iconify from '@/components/iconify';

// ----------------------------------------------------------------------

const SPACING = 2.5;

interface IBlock {
  sx?: SxProps;
  title: string;
  tooltip?: string;
  children?: ReactNode;
  other?: any;
}

export default function Block({ title, tooltip, children, sx, ...other }: IBlock): JSX.Element {
  return (
    <Stack spacing={1.5} sx={{ mb: SPACING, ...sx }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 'fontWeightMedium' }}>
          {title}
        </Typography>

        {tooltip && (
          <Tooltip title={tooltip}>
            <Iconify icon="eva:info-outline" width={16} sx={{ mx: 0.5 }} />
          </Tooltip>
        )}
      </Stack>

      {children}
    </Stack>
  );
}
