import React, { useState } from 'react';
import TabSection from './tab';
import TopSection from './top';
import ContentsRender from './type';

function SubListSection(): JSX.Element {
  const [tab, setTab] = useState(0);

  return (
    <>
      <TopSection />
      <TabSection tab={tab} setTab={setTab} />
      <ContentsRender tab={tab} />
    </>
  );
}

export default SubListSection;
