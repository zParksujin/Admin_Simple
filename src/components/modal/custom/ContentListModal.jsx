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
import React from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRecoilValue } from 'recoil';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';
import blockCodeListSelector from '@/recoil/global/block/blockCodeList/fetchSelector';

const ContentListModal = ({ cb }) => {
  const { setCloseModal } = useGlobalModal();
  const blockCodeList = useRecoilValue(blockCodeListSelector);
  console.log(blockCodeList.data);
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
          minWidth: '900px',
          minHeight: '700px',
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
            <TextField disabled name="작성자" label="작성자" />
            <TextField disabled name="종류" label="종류" />
            <TextField sx={{ gridColumn: '1/3' }} disabled name="컨텐츠내용" label="컨텐츠내용" />
            <TextField disabled name="처리자(관리자)" label="처리자(관리자)" />
            <TextField disabled name="처리일" label="처리일" />
            <TextField disabled name="적용대상" label="적용대상" />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="block-code">제재 대분류</InputLabel>
              <NativeSelect
                id="block-code"
                // onChange={onChangeFilter}
                // defaultValue
                // name={typeKey}
                // label={typeKey}
                defaultValue="선택"
              >
                    <option value="선택">
                      선택
                    </option>
                {Object.keys(blockCodeList.data).map((v) => (
                    <option key={v} value={v}>
                    {blockCodeList.data[v]}
                    </option>
               ))}
              </NativeSelect>
            </FormControl>
            <FormControl sx={{ gridColumn: '1/3' }} fullWidth>
              <InputLabel id="demo-simple-select-label">위반항목</InputLabel>
              <NativeSelect 
                id="uncontrolled-native"
              >
                <option key="1" value="1">
                  1
                </option>
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">제재항목</InputLabel>
              <NativeSelect
                id="uncontrolled-native"
              >
                <option key="1" value="1">
                  1
                </option>
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">기간</InputLabel>
              <NativeSelect
                id="uncontrolled-native"
              >
                <option key="1" value="1">
                  1
                </option>
              </NativeSelect>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Responsive"
                inputFormat="YYYY-MM-DD HH:mm"
                renderInput={(params) => <TextField {...params} />}
                //   value={value}
                onChange={(newValue) => {
                  // setValue(newValue);
                }}
              />
            </LocalizationProvider>
            <TextField disabled name="메시지(회원 알림) - 자동발송" label="메시지(회원 알림) - 자동발송" />
            <TextField fullWidth name="메모(관리자)" label="메모(관리자)" sx={{ gridColumn: '1/3' }} />
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

export default ContentListModal;
