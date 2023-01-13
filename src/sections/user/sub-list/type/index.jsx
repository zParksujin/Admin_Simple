import React, { useMemo } from 'react';
import ChartComponent from './chart';
import TableComponent from './table';

function ContentsRender({ tab }) {
  const render = useMemo(
    () => (
      <>
        {tab === 0 && <TableComponent />}
        {tab === 1 && <ChartComponent />}
      </>
    ),
    [tab]
  );

  return <>{render}</>;
}

export default ContentsRender;
