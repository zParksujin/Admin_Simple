import React from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';

const BlockProcessSelectSK = (): JSX.Element => (
  <>
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor="block-code">
        제재 대분류
      </InputLabel>
      <NativeSelect id="block-code" defaultValue="선택">
        <option value="선택">선택</option>
      </NativeSelect>
    </FormControl>
    <FormControl sx={{ gridColumn: '1/3' }} fullWidth>
      <InputLabel htmlFor="block-detail-code">위반항목</InputLabel>
      <NativeSelect id="block-detail-code" defaultValue="선택">
        <option value="선택">선택</option>
      </NativeSelect>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel htmlFor="block-list">제재항목</InputLabel>
      <NativeSelect id="block-list">
        <option value="선택">선택</option>
      </NativeSelect>
    </FormControl>
    <FormControl fullWidth>
      <InputLabel htmlFor="expire-day">기간</InputLabel>
      <NativeSelect id="expire-day">
        <option value="선택">선택</option>
      </NativeSelect>
    </FormControl>
  </>
);

export default BlockProcessSelectSK;
