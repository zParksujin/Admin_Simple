import React from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import Toolbar from '@/components/type/toolbar';
import { chartTypeKey, typeKeyArray } from '@/sections/statistics/statistics-buy/type';
import statisticsBuyParamAtom, {
  statisticsBuyParam,
} from '@/recoil/statistics/statistics-buy/parmas';
import {
  statisticsBuyToggleAtom,
} from '@/recoil/statistics/statistics-buy/chart/datasets/selector';

function ToolbarRender({ tab }) {
  const param = useRecoilValue(statisticsBuyParamAtom);
  const setType = useSetRecoilState(statisticsBuyParam);
  const resetParam = useResetRecoilState(statisticsBuyParamAtom);
  const resetToggle = useResetRecoilState(statisticsBuyToggleAtom);
  const toggle = useRecoilValue(statisticsBuyToggleAtom);
  const setToggle = useSetRecoilState(statisticsBuyToggleAtom);
  const toggleTypeList = chartTypeKey;

  const reset = () => {
    resetParam();
    resetToggle();
  };

  return (
    <Toolbar
      setType={setType}
      setToggle={setToggle}
      param={param}
      typeKey={typeKeyArray}
      onResetType={reset}
      toggleTypeList={toggleTypeList}
      toggle={toggle}
      tab={tab}
    />
  );
}

export default ToolbarRender;
