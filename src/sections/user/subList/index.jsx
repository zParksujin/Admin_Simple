import React, { useState } from 'react';
import TabSection from './Tab';
import TopSection from './Top';
import ContentsRender from './type';

function SubListSection() {
  const [tab, setTab] = useState(0);

  const obj = {}
  return (
    <>
      <TopSection />
      <TabSection tab={tab} setTab={setTab}/>
      <ContentsRender tab={tab} />
      {obj.asdf.adsf}
    </>
  );
}

export default SubListSection;
