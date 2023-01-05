import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';
import { MODAL_TYPE } from '..';

const DepthTestModal = ({ cb, count = 0 }) => {
  const { setCloseModal, setModal, setClearModal } = useGlobalModal();
  const onCloseModal = (e) => {
    if (cb) {
      cb();
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
            <Typography>등록되었습니다.</Typography>
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Button sx={{ height: '45px', width: '100px' }} onClick={() => onCloseModal()}>
              OK
            </Button>
            <Button
             onClick={() =>
                setModal({
                  type: MODAL_TYPE.DEPTH_TEST,
                  props: {
                    count: count + 1
                  },
                })
              }
            >
               MORE DEPTH {count}
            </Button>
            <Button
             onClick={() =>
              setClearModal()
              }
            >
               CLEAR MODAL
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
          background: 'rgba(0,0,0,.451)'
        }}
        onClick={() => onCloseModal()}
        />
    </Box>
  );
};

export default DepthTestModal;
