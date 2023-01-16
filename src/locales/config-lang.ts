// @mui
import { enUS, koKR } from '@mui/material/locale';

export const allLangs = [
  {
    label: 'Korea',
    value: 'ko',
    systemValue: koKR,
    icon: '/assets/icons/flags/ic_flag_kr.svg',
  },
  {
    label: 'English',
    value: 'us',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_us.svg',
  },
];

export const defaultLang = allLangs[0];
