import React from 'react';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { SetterOrUpdater } from 'recoil';
import { useLocales } from '@/locales';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme?.shape?.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme?.shape?.borderRadius,
    },
  },
}));
interface IToggleType {
  toggleTypeList: string[];
  setToggle: SetterOrUpdater<string>;
  toggle: string;
}

const ToggleType = ({ toggleTypeList, setToggle, toggle }: IToggleType): JSX.Element => {
  const { t } = useLocales();
  const handleToggle = (_e: any, value: string) => {
    setToggle(value);
  };

  return (
    <StyledToggleButtonGroup exclusive value={toggle} onChange={handleToggle}>
      {toggleTypeList.length > 0 &&
        toggleTypeList.map((v: string) => (
          <ToggleButton key={v} value={v}>
            {t(`common.${v}`)}
          </ToggleButton>
        ))}
    </StyledToggleButtonGroup>
  );
};

export default ToggleType;
