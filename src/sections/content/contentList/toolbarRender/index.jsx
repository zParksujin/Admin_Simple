import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import TableToolbar from '@/components/type/toolbar';
import { contentListParam, contentListSearch } from '@/recoil/content/contentList/parmas';
import { typeOptions, typeKeyArray } from '@/sections/content/contentList/contentsRender/type';
import contentListParamAtom from '@/recoil/content/contentList/parmas/atom';

function ToolbarRender({ tab }) {
  const param = useRecoilValue(contentListParamAtom);
  const setType = useSetRecoilState(contentListParam);
  const setSearchType = useSetRecoilState(contentListSearch);

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
