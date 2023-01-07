
import { useRecoilCallback } from "recoil";

import { setBlockContent, getBlockContentInfo } from "@/api/content"
import { MODAL_TYPE } from "@/components/modal"
import useGlobalModal from "@/utils/hooks/global/modal/useGlobalModal"

const useContentListImage = () => {
    const { setModal } = useGlobalModal();

    const fetchBlockContent = useRecoilCallback(({set}) => async body => {
        await setBlockContent(body).then(res => {
          console.log('fetchBlockContent', res);
          setModal({
            type: MODAL_TYPE.ONE_BUTTON,
            props: {
              des: res.data.message,
              clear: true
            }
          })
        }).catch(error => {
          setModal({
            type: MODAL_TYPE.ONE_BUTTON,
            props: {
              des: error?.response?.data?.message || '무언가 잘못되었습니다.'
            }
          })
        })
      }, [])
    
      const fetchBlockContentInfo = useRecoilCallback(({set}) => async contentData => {
        if (contentData?.message_idx) {
          await getBlockContentInfo(contentData.message_idx).then(res => {
            if (res?.data?.status && res?.data?.data?.content_status === 'B') {
              setModal({
                type: MODAL_TYPE.CUSTOM_COMOPNENT.BAN_LAYER,
                props: {
                  data: contentData,
                },
              })
            } else {
              setModal({
                type: MODAL_TYPE.CUSTOM_COMOPNENT.BAN_PROCCESS_LAYER,
                props: {
                  data: contentData,
                  cbFunc: fetchBlockContent,
                },
              })
            }
          }).catch(error => {
            console.log(error);
            setModal({
              type: MODAL_TYPE.CUSTOM_COMOPNENT.BAN_PROCCESS_LAYER,
              props: {
                data: contentData,
                cbFunc: fetchBlockContent,
              },
            })
          });
        }
      }, [])
      return { fetchBlockContentInfo }
}

export default useContentListImage;