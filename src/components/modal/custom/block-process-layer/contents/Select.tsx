// @ts-nocheck
import React, { useMemo } from 'react';
import { FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { blockCodeListSelector } from '@/recoil/global/modal/block/block-code-list';
import { blockDetailCodeListSelector } from '@/recoil/global/modal/block/block-detail-code-list';
import blockCodeIdxAtom from '@/recoil/global/modal/block/block-code-list/block-code-idx';
import { block_type, expire_day } from '../../type';

const BlockProcessSelect = ({ setCategoryIdx, setBlockType, setExpireDay }) => {
  const blockCodeObj = useRecoilValue(blockCodeListSelector);
  const blockCodeDetailList = useRecoilValue(blockDetailCodeListSelector);
  const setBlockCodeIdx = useSetRecoilState(blockCodeIdxAtom);
  const sanctionsList = useMemo(() => ['선택', '경고', '이용 제한', '이용 정지'], []);
  const termList = useMemo(() => ['선택', '-', '3일', '7일', '30일', '영구'], []);

  return (
    <>
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
        <InputLabel htmlFor="block-detail-code">위반항목</InputLabel>
        <NativeSelect
          id="block-detail-code"
          defaultValue="선택"
          onChange={(e) => setCategoryIdx(e.currentTarget.value)}
        >
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
        <InputLabel htmlFor="block-list">제재항목</InputLabel>
        <NativeSelect
          id="block-list"
          onChange={(e) => setBlockType(block_type[e.currentTarget.value])}
        >
          {sanctionsList.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="expire-day">기간</InputLabel>
        <NativeSelect
          id="expire-day"
          onChange={(e) => setExpireDay(expire_day[e.currentTarget.value])}
        >
          {termList.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </>
  );
};

export default BlockProcessSelect;
