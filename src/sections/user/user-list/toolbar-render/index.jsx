import React from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import userListParamAtom, { userListParam, userListSearch } from '@/recoil/user/user-list/parmas';
import { typeOptions, typeKeyArray } from '@/sections/user/user-list/type';

function ToolbarRender({ tab }) {
  const param = useRecoilValue(userListParamAtom);
  const setType = useSetRecoilState(userListParam);
  const setSearchType = useSetRecoilState(userListSearch);
  const reset = useResetRecoilState(userListParamAtom)

  return (
    <TableToolbar
      setType={setType}
      setSearchType={setSearchType}
      param={param}
      typeKey={typeKeyArray}
      typeOptions={typeOptions}
      onResetType={reset}
    />
  );
}

export default ToolbarRender;
