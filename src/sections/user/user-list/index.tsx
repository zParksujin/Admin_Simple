import React from 'react';
import ToolbarRender from './toolbar-render';
import UserListTable from './contents-render/table';

function UserListSection() {
  return (
    <>
      <ToolbarRender />
      <UserListTable />
    </>
  );
}

export default UserListSection;
