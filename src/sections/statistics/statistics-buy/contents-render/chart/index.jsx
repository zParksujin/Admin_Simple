import React from 'react';
import { useRecoilValue } from 'recoil';
import ChartComponent from '@/components/type/chart';
import { statisticsBuyDatasetsSelector, statisticsBuyToggleAtom } from '@/recoil/statistics/statistics-buy/chart/datasets/selector';
import { useLocales } from '@/locales';

function StatisticsBuyChart({ tab }) {
  const datasets = useRecoilValue(statisticsBuyDatasetsSelector);
  const subTitle = useRecoilValue(statisticsBuyToggleAtom);
  const { t } = useLocales()
  return <ChartComponent data={datasets} title={t('statisticsBuy.title')} subTitle={t(`common.${subTitle}`)}/>;
}

export default StatisticsBuyChart;
