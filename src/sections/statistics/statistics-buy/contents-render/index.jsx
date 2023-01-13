import React, { useMemo } from 'react';
import StatisticsBuyTable from './table';
import StatisticsBuyChart from './chart';

function ContentsRender({ tab }) {
  const render = useMemo(
    () => (
      <>
        {tab === 0 && <StatisticsBuyTable />}
        {tab === 1 && <StatisticsBuyChart />}
      </>
    ),
    [tab]
  );

  return <>{render}</>;
}

export default ContentsRender;
