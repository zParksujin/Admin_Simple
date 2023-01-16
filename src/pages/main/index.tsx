import React from 'react';
import { Container } from '@mui/material';
import { useSettingsContext } from '@/components/settings';

function Main() {
  const { themeStretch } = useSettingsContext();

  return <Container maxWidth={themeStretch ? false : 'xl'}> Main</Container>;
}

export default Main;
