import React from 'react';
import { Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useSettingsContext } from '@/components/settings';
import StatisticsBuySection from '@/sections/statistics/statistics-buy';

function UserList() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> 결제통계 | Fancoo admin</title>
      </Helmet>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <StatisticsBuySection />
      </Container>
    </>
  );
}

export default UserList;
