import React from 'react';
import { useRecoilValue } from 'recoil';
import ChartComponent from '@/components/type/chart';
import {
  statisticsBuyDatasetsSelector,
  statisticsBuyToggleAtom,
} from '@/recoil/statistics/statistics-buy/chart/datasets/selector';

function StatisticsBuyChart() {
  const datasets = useRecoilValue(statisticsBuyDatasetsSelector);
  const subTitle = useRecoilValue(statisticsBuyToggleAtom);

  return (
    <ChartComponent data={datasets} title="statisticsBuy.title" subTitle={`common.${subTitle}`} />
  );
}

export default StatisticsBuyChart;
