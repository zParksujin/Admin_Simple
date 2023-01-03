import React from 'react';
import {  useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import { userListBodySelector } from '@/recoil/user/list/body';
import { typeOptions, typeKeyArray } from '@/components/type/table/type';

function ToolbarRender({ tab }) {
  const setType = useSetRecoilState(userListBodySelector);

  return (<TableToolbar setType={setType} typeKey={typeKeyArray} typeOptions={typeOptions} />);
}

export default ToolbarRender;
