import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  InputLabel,
  NativeSelect,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';

const BanLayerModal = ({ cb }) => {
  const { setCloseModal } = useGlobalModal();
  const blindList = useMemo(() => ['선택', '블라인드', '블라인드 해제'], [])

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
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component="div"
    >
      <Card
        sx={{
          padding: '15px 25px',
          zIndex: 1300,
        }}
      >
        <Typography>제재관리</Typography>
        <Divider sx={{ margin: '20px 0' }} />
        <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { md: '1fr 1fr' },
              width: '100%',
              gap: 2,
            }}
          >
            <TextField disabled name="제재일자" label="제재일자" />
            <TextField disabled name="대상자" label="대상자" />
            <TextField disabled name="종류" label="종류" />
            <TextField disabled name="내용" label="내용" />
            <TextField sx={{ gridColumn: '1/3' }} disabled name="메시지(회원알림) - 자동 발송" label="메시지(회원알림) - 자동 발송" />
            <FormControl sx={{ gridColumn: '1/3' }} fullWidth>
              <InputLabel variant="standard" htmlFor="block-code">
              블라인드 여부
              </InputLabel>
              <NativeSelect id="blind" defaultValue="선택">
                <option value="선택">선택</option>
                {blindList.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <TextField
              fullWidth
              name="메모(관리자)"
              label="메모(관리자)"
              sx={{ gridColumn: '1/3' }}
            />
          </Box>
        </Paper>
        <Divider sx={{ margin: '20px 0' }} />
        <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <Button sx={{ height: '45px', width: '100px' }} onClick={() => onCloseModal()}>
            설정
          </Button>
          <Button sx={{ height: '45px', width: '100px' }} onClick={() => onCloseModal()}>
            취소
          </Button>
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

export default BanLayerModal;
