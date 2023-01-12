import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ImageListComponent from '@/components/type/imageList';
import { contentListSelector } from '@/recoil/content/content-list';
import { contentListParam } from '@/recoil/content/content-list/parmas';
import useContentListImage from '@/recoil/global/modal/block/hook/useContentList';

const ContentListImage = () => {
  const contentList = useRecoilValue(contentListSelector('content'));
  const { data, page } = contentList;
  

  const { fetchBlockContentInfo } = useContentListImage();
  const setType = useSetRecoilState(contentListParam);

  return (
    <ImageListComponent
      setType={setType}
      total={page.total}
      limit={page.limit}
      data={data}
      page={page.page - 1}
      getInfoData={fetchBlockContentInfo}
    />
  );
};

export default ContentListImage;
