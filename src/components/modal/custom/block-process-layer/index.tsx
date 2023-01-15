// @ts-nocheck
import { Box, Button, Card, Divider, Typography } from '@mui/material';
import React, { Suspense, useState } from 'react';
import dayjs from 'dayjs';
import useGlobalModal from '@/utils/hooks/global/modal/useGlobalModal';
import { MODAL_TYPE } from '../..';
import BlockProcessContents from './contents';

const BanProccessLayerModal = ({ cbFunc, data }) => {
  const { setCloseModal, setModal } = useGlobalModal();
  const [categoryIdx, setCategoryIdx] = useState();
  const [blockType, setBlockType] = useState();
  const [expireDay, setExpireDay] = useState();
  const [blockDate, setBlockDate] = useState(dayjs(new Date()).format('YYYY-MM-DD HH:mm'));
  const [memo, setMemo] = useState('');

  // eslint-disable-next-line consistent-return
  const handleBanContents = () => {
    console.log(categoryIdx, blockType, expireDay);
    if (!categoryIdx || !blockType || expireDay === undefined) {
      setModal({
        type: MODAL_TYPE.ONE_BUTTON,
        props: {
          des: '항목을 선택해주세요.',
        },
      });
      return false;
    }
    const defaultOption = {
      category_idx: categoryIdx,
      type: blockType,
      expire_day: expireDay,
      block_date: blockDate,
      message_idx: data.message_idx,
    };

    const subOption = { memo };

    const obj = Object.assign(defaultOption, memo === '' ? {} : subOption);
    cbFunc(obj);
  };

  return (
    <Box
      sx={{
        opacity: 1,
        transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1200,
        outline: '0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component="div"
    >
      <Card
        sx={{
          padding: '15px 25px',
          zIndex: 1300,
        }}
      >
        <Typography>제재관리</Typography>
        <Divider sx={{ margin: '20px 0' }} />
        <Suspense>
          <BlockProcessContents
            data={data}
            setCategoryIdx={setCategoryIdx}
            setBlockType={setBlockType}
            setExpireDay={setExpireDay}
            setBlockDate={setBlockDate}
            setMemo={setMemo}
            blockDate={blockDate}
            memo={memo}
          />
        </Suspense>
        <Divider sx={{ margin: '20px 0' }} />
        <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
          <Button
            sx={{ height: '45px', width: '100px' }}
            onClick={() => {
              handleBanContents();
            }}
          >
            설정
          </Button>
          <Button sx={{ height: '45px', width: '100px' }} onClick={() => setCloseModal()}>
            취소
          </Button>
        </Box>
      </Card>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          background: 'rgba(0,0,0,.451)',
        }}
        onClick={() => setCloseModal()}
      />
    </Box>
  );
};

export default BanProccessLayerModal;
