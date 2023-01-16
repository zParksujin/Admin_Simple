import { Tab, Tabs } from '@mui/material';
import React from 'react';
import { StyledIcon } from '@/components/nav-section/mini/styles';
import { ICONS } from '@/layouts/dashboard/nav/config-navigation';

interface ITabSection {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

function TabSection({ tab, setTab }: ITabSection) {
  return (
    <Tabs value={tab} onChange={(_e, value) => setTab(value)} aria-label="icon label tabs">
      <Tab icon={<StyledIcon>{ICONS.user}</StyledIcon>} label="TABLE" />
      <Tab icon={<StyledIcon>{ICONS.user}</StyledIcon>} label="CHART" />
    </Tabs>
  );
}

export default TabSection;