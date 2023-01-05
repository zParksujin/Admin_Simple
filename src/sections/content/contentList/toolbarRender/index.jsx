import React from 'react';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import contentListParamAtom, { contentListParam, contentListSearch } from '@/recoil/content/contentList/parmas';
import { typeOptions, typeKeyArray } from '@/sections/content/contentList/contentsRender/type';

function ToolbarRender({ tab }) {
  const param = useRecoilValue(contentListParamAtom);
  const setType = useSetRecoilState(contentListParam);
  const setSearchType = useSetRecoilState(contentListSearch);
  const reset = useResetRecoilState(contentListParamAtom);
  

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
