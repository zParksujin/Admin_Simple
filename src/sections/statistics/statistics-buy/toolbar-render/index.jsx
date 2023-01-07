import React from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import { typeKeyArray } from '@/sections/statistics/statistics-buy/type';
import statisticsBuyParamAtom, { statisticsBuyParam } from '@/recoil/statistics/statistics-buy/parmas';

function ToolbarRender({ tab }) {
  const param = useRecoilValue(statisticsBuyParamAtom);
  const setType = useSetRecoilState(statisticsBuyParam);
  const reset = useResetRecoilState(statisticsBuyParamAtom)

  return (
    <TableToolbar
      setType={setType}
      param={param}
      typeKey={typeKeyArray}
      onResetType={reset}
    />
  );
}

export default ToolbarRender;
