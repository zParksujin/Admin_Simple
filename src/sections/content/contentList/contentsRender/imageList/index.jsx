import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ImageListComponent from '@/components/type/imageList';
import { contentListSelector } from '@/recoil/content/contentList';
import { contentListParam } from '@/recoil/content/contentList/parmas';
import { MODAL_TYPE } from '@/components/modal';

const ContentListImage = () => {
  const contentList = useRecoilValue(contentListSelector('content'));
  const { data, page } = contentList;
  const setType = useSetRecoilState(contentListParam);

  return (
    <ImageListComponent
      setType={setType}
      total={page.total}
      limit={page.limit}
      data={data}
      page={page.page - 1}
      modalType={MODAL_TYPE.CUSTOM_COMOPNENT.CONTENT_LIST}
    />
  );
};

export default ContentListImage;
