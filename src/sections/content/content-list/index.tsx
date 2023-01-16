import React, { useState } from 'react';
import ContentsRender from './contents-render';
import TabSection from './tab';
import ToolbarRender from './toolbar-render';

function ContentListSection() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <TabSection tab={tab} setTab={setTab} />
      <ToolbarRender />
      <ContentsRender tab={tab} />
    </>
  );
}

export default ContentListSection;
