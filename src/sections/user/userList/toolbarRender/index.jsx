import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import { userListParam, userListSearch } from '@/recoil/user/userList/parmas';
import { typeOptions, typeKeyArray } from '@/sections/user/userList/type';
import userListParamAtom from '@/recoil/user/userList/parmas/atom';

function ToolbarRender({ tab }) {
  const param = useRecoilValue(userListParamAtom);
  const setType = useSetRecoilState(userListParam);
  const setSearchType = useSetRecoilState(userListSearch);

  return (
    <TableToolbar
      setType={setType}
      setSearchType={setSearchType}
      param={param}
      typeKey={typeKeyArray}
      typeOptions={typeOptions}
    />
  );
}

export default ToolbarRender;
