import { CardMedia, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { lazy, Suspense } from 'react';
import { pkg_type_name } from '@/components/modal/custom/type';
// import BlockProcessSelect from './Select';
import BlockProcessSelectSK from './SelectSk';

const BlockProcessSelect = lazy(() => import('./Select'))

const BlockProcessContents = ({
  data,
  setCategoryIdx,
  setBlockType,
  setExpireDay,
  setBlockDate,
  setMemo,
  blockDate,
  memo,
}) => (
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
      <Suspense fallback={<BlockProcessSelectSK />}>
        <BlockProcessSelect
          setCategoryIdx={setCategoryIdx}
          setBlockType={setBlockType}
          setExpireDay={setExpireDay}
        />
      </Suspense>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          // label="Responsive"
          label="적용일자"
          inputFormat="YYYY-MM-DD HH:mm"
          renderInput={(params) => <TextField {...params} />}
          value={blockDate}
          onChange={(newValue) => {
            const day = dayjs(newValue);
            console.log(day.format('YYYY-MM-DD HH:mm'));
            setBlockDate(day.format('YYYY-MM-DD HH:mm'));
          }}
        />
      </LocalizationProvider>
      <TextField disabled name="메시지(회원 알림)" label="메시지(회원 알림)" value="자동발송" />
      <TextField
        fullWidth
        name="메모(관리자)"
        label="메모(관리자)"
        sx={{ gridColumn: '1/3' }}
        value={memo}
        onChange={(e) => setMemo(e.currentTarget.value)}
      />
      <Typography>컨텐츠 내용</Typography>
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
        {data?.contents?.length > 0 &&
          data?.contents.map((v) => (
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
);

export default BlockProcessContents;
