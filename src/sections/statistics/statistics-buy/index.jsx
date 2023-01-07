import React, { useState } from 'react';
import TabSection from './tab';
import ToolbarRender from './toolbar-render';
import ContentsRender from './contents-render';

function StatisticsBuySection(params) {
  const [tab, setTab] = useState(0);

  return (
    <>
      <TabSection tab={tab} setTab={setTab} />
      <ToolbarRender tab={tab} />
      <ContentsRender tab={tab} />
    </>
  );
}

export default StatisticsBuySection;
