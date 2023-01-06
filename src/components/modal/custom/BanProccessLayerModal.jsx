import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  FormControl,
  InputLabel,
  NativeSelect,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useMemo } from 'react';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';
import { blockCodeListSelector } from '@/recoil/global/block/blockCodeList';
import { blockDetailCodeListSelector } from '@/recoil/global/block/blockDetailCodeList';
import blockCodeIdxAtom from '@/recoil/global/block/blockCodeList/blockCodeIdx';
import {pkg_type_name} from '@/components/modal/custom/type'

/**
 * 
 * category_idx: 1
    type: warning
    expire_day: 0
    block_date: 2023-01-06 16:25:00
    message_idx: 3679
 */
const BanProccessLayerModal = ({ cb, data }) => {
  const { setCloseModal } = useGlobalModal();
  const blockCodeObj = useRecoilValue(blockCodeListSelector);
  const blockCodeDetailList = useRecoilValue(blockDetailCodeListSelector);
  const setBlockCodeIdx = useSetRecoilState(blockCodeIdxAtom);
  const sanctionsList = useMemo(() => ['선택', '경고', '이용 제한', '이용 정지'], [])
  const termList = useMemo(() => ['선택', '-', '3일', '7일', '30일', '영구'], []);

  const onCloseModal = (e) => {
    if (cb) {
      cb();
    }

    setCloseModal();
  };

  console.log(data);
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
            <TextField
              disabled
              name="작성자"
              label="작성자"
              value={`${data?.creator_nick}(${data?.creator_profile_id})`}
            />
            {/* <TextField disabled name="작성자" label="작성자" /> */}
            <TextField
              disabled
              name="종류"
              label="종류"
              value={`${pkg_type_name[data?.pkg_type || data?.content?.pkg_type]}`}
            />
           
            <TextField disabled name="처리자(관리자)" label="처리자(관리자)" value="자동입력" />
            <TextField disabled name="처리일" label="처리일" value="자동입력" />
            <TextField
              disabled
              name="적용대상"
              label="적용대상"
              value={`${pkg_type_name[data?.pkg_type || data?.content?.pkg_type]}`}
            />
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="block-code">
                제재 대분류
              </InputLabel>
              <NativeSelect
                id="block-code"
                onChange={(e) => setBlockCodeIdx(e.currentTarget.value)}
                defaultValue="선택"
              >
                <option value="선택">선택</option>
                {blockCodeObj &&
                  Object.keys(blockCodeObj).map((v) => (
                    <option key={v} value={v}>
                      {blockCodeObj[v]}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl sx={{ gridColumn: '1/3' }} fullWidth>
              <InputLabel id="demo-simple-select-label">위반항목</InputLabel>
              <NativeSelect id="block-detail-code">
                <option value="선택">선택</option>
                {blockCodeDetailList?.length > 0 &&
                  blockCodeDetailList.map((v) => (
                    <option key={v.idx} value={v.idx}>
                      {v.message}
                    </option>
                  ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">제재항목</InputLabel>
              <NativeSelect id="uncontrolled-native">
                {sanctionsList.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">기간</InputLabel>
              <NativeSelect id="uncontrolled-native">
                {termList.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
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
            <TextField
              disabled
              name="메시지(회원 알림)"
              label="메시지(회원 알림)"
              value="자동발송"
            />
            <TextField
              fullWidth
              name="메모(관리자)"
              label="메모(관리자)"
              sx={{ gridColumn: '1/3' }}
            />
             <Typography>
              컨텐츠 내용
            </Typography>
            {data?.content && (
              <Box sx={{ gridColumn: '1/3' }}>
                <CardMedia
                  sx={{ width: 151 }}
                  component="img"
                  image={data.content.poster_url}
                  alt="Live from space album cover"
                />
              </Box>
            )}
            <Box sx={{ display: data?.contents?.length > 0 ? 'block' : 'none', gridColumn: '1/3' }}>
            {data?.contents?.length > 0 &&  data?.contents.map((v) => (
                <CardMedia
                  sx={{ width: 151 }}
                  component="img"
                  image={data.content.poster_url}
                  alt="Live from space album cover"
                />
            ))}
            </Box>
          </Box>
        </Paper>
        <Divider sx={{ margin: '20px 0' }} />
        <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <Button sx={{ height: '45px', width: '100px' }} onClick={() => onCloseModal()}>
            설정
          </Button>
          <Button sx={{ height: '45px', width: '100px' }} onClick={() => setCloseModal()}>
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
        onClick={() => setCloseModal()}
      />
    </Box>
  );
};

export default BanProccessLayerModal;
