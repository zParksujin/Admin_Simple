import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { StyledIcon } from '@/components/nav-section/mini/styles';
import { ICONS } from '@/layouts/dashboard/nav/config-navigation';

function TabSection({tab, setTab}) {
  return (
    <Tabs value={tab} onChange={(e, value) => setTab(value)} aria-label="icon label tabs">
      <Tab icon={<StyledIcon>{ICONS.user}</StyledIcon>} label="TABLE" />
      <Tab icon={<StyledIcon>{ICONS.user}</StyledIcon>} label="CHART" />
    </Tabs>
  );
}

export default TabSection;
