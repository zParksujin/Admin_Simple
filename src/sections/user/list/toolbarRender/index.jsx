import React from 'react';
import { useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import { userListBodyParam, userListBodySearch } from '@/recoil/user/list/parmas';
import { typeOptions, typeKeyArray } from '@/components/type/table/type';

function ToolbarRender({ tab }) {
  const setType = useSetRecoilState(userListBodyParam);
  const setSearchType = useSetRecoilState(userListBodySearch);

  return (
    <TableToolbar
      setType={setType}
      setSearchType={setSearchType}
      typeKey={typeKeyArray}
      typeOptions={typeOptions}
    />
  );
}

export default ToolbarRender;
