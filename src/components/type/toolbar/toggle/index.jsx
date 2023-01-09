import React from 'react';
import { styled, ToggleButton, ToggleButtonGroup } from '@mui/material';
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

const ToggleType = ({ toggleTypeList, setToggle, toggle }) => {
  const { t } = useLocales();
  const handleToggle = (e, value) => {
    if (value.length > 0) {
      setToggle(value);
    }
  };

  return (
    <StyledToggleButtonGroup exclusive value={toggle} onChange={handleToggle}>
      {toggleTypeList.length > 0 &&
        toggleTypeList.map((v) => (
          <ToggleButton key={v} value={v}>
            {t(`common.${v}`)}
          </ToggleButton>
        ))}
    </StyledToggleButtonGroup>
  );
};

export default ToggleType;
