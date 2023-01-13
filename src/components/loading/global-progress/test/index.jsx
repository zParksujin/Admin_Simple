import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import useGlobalLoading from '@/utils/hooks/global/loading/useGlobalLoading';

const TestProgress = () => {
  const { closeLoading } = useGlobalLoading();
  return (
    <Box
      sx={{
        opacity: 1,
        transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1200,
        outline: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component="div"
    >
      <CircularProgress />
      <Button
        sx={{ zIndex: 1200 }}
        onClick={() => {
          closeLoading();
        }}
      >
        Close Button
      </Button>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0,.151)',
        }}
      />
    </Box>
  );
};

export default TestProgress;
