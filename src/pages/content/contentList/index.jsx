import React from 'react';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';
import ContentListSection from '@/sections/content/contentList';

function ContentList() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> 콘텐츠목록 | Fancoo admin </title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ContentListSection />
      </Container>
    </>
  );
}

export default ContentList;
