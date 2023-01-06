import React from 'react';
import { useRecoilCallback, useRecoilValue, useSetRecoilState } from 'recoil';
import ImageListComponent from '@/components/type/imageList';
import { contentListSelector } from '@/recoil/content/contentList';
import { contentListParam } from '@/recoil/content/contentList/parmas';
import { MODAL_TYPE } from '@/components/modal';
import { getBlockContentInfo } from '@/api/content';
import useGlobalModal from '@/utils/hooks/modal/useGlobalModal';

const ContentListImage = () => {
  const contentList = useRecoilValue(contentListSelector('content'));
  const { setModal } = useGlobalModal();
  const { data, page } = contentList;
  const setType = useSetRecoilState(contentListParam);

  const fetchBlockContentInfo = useRecoilCallback(({set}) => async contentData => {
    if (contentData?.message_idx) {
      await getBlockContentInfo(contentData.message_idx).then(res => {
        if (res?.data?.status && res?.data?.data?.content_status === 'B') {
          setModal({
            type: MODAL_TYPE.CUSTOM_COMOPNENT.BAN_LAYER,
            props: {
              data: contentData
              // cb: () => alert('modal test'),
            },
          })
        } else {
          setModal({
            type: MODAL_TYPE.CUSTOM_COMOPNENT.BAN_PROCCESS_LAYER,
            props: {
              data: contentData
              // cb: () => alert('modal test'),
            },
          })
        }
      }).catch(error => {

        console.log(error);
        setModal({
          type: MODAL_TYPE.CUSTOM_COMOPNENT.BAN_PROCCESS_LAYER,
          props: {
            data: contentData
            // cb: () => alert('modal test'),
          },
        })
      });
    }
  }, [])

  return (
    <ImageListComponent
      setType={setType}
      total={page.total}
      limit={page.limit}
      data={data}
      page={page.page - 1}
      getBlockContentInfo={fetchBlockContentInfo}
    />
  );
};

export default ContentListImage;
