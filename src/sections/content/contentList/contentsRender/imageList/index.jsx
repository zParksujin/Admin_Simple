import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import ImageListComponent from '@/components/type/imageList';
import { contentListSelector } from '@/recoil/content/contentList';
import { contentListParam } from '@/recoil/content/contentList/parmas';

const ContentListImage = () => {
  const contentList = useRecoilValue(contentListSelector('content'));
  const { data, page } = contentList;
  const setType = useSetRecoilState(contentListParam);

  console.log(contentList, 'contentList');
  return <ImageListComponent setType={setType} data={data} page={page} />;
};

export default ContentListImage;
