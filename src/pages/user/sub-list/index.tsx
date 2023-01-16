import React from 'react';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';
import SubListSection from '@/sections/user/sub-list';

function SubList() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> 구독목록 | Fancoo admin</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <SubListSection />
      </Container>
    </>
  );
}

export default SubList;
