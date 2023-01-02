import React, { useState } from 'react';
import TabSection from './Tab';
import TopSection from './Top';
import ContentsRender from './type';

function UserListSection(params) {
  const [tab, setTab] = useState(0);
  return (
    <>
      <TopSection />
      <TabSection tab={tab} setTab={setTab} />
      <ContentsRender tab={tab} />
    </>
  );
}

export default UserListSection;
