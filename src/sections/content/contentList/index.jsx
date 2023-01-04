import React, { useState } from 'react';
import ContentsRender from './contentsRender';
import TabSection from './tab';
import ToolbarRender from './toolbarRender';

function ContentListSection() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <TabSection tab={tab} setTab={setTab} />
      <ToolbarRender tab={tab} />
      <ContentsRender tab={tab} />
    </>
  );
}

export default ContentListSection;
