import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';

const OneButtonModal = ({ cbFunc, des, clear = false }) => {
  const { setCloseModal, setClearModal } = useGlobalModal();

  const onCloseModal = (e) => {
    if (cbFunc) {
      cbFunc();
    }
    if (clear) {
      setClearModal ();
    }
    setCloseModal();
  };

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
        '-webkit-box-pack': 'center',
        justifyContent: 'center',
        '-webkit-box-align': 'center',
        alignItems: 'center',
      }}
      component="div"
    >
      <Card
        sx={{
          minWidth: '300px',
          minHeight: '200px',
          zIndex: 1300,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
          }}
          elevation={4}
        >
          {/* TODO add T */}
          <Box component="div" sx={{ height: '100%', padding: '70px 100px' }}>
            <Typography>{des}</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Button sx={{ height: '45px', width: '100px' }} onClick={() => onCloseModal()}>
              OK
            </Button>
          </Box>
        </Box>
      </Card>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0,.451)',
        }}

        onClick={() => onCloseModal()}
        />
    </Box>
  );
};

export default OneButtonModal;
