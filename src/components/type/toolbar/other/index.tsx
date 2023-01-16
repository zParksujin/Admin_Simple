import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React, { useCallback } from 'react';
import { SetterOrUpdater } from 'recoil';
import { useLocales } from '@/locales';

const SELECT_WIDTH = 100;

interface ISearchType {
  typeOptions: Record<string, any>;
  typeKey: string;
  setType: SetterOrUpdater<any>;
  param: any;
}

const OtherType = ({ typeOptions, typeKey, setType, param }: ISearchType) => {
  const { t } = useLocales();

  const onChangeFilter = useCallback(
    (e: { target: { value: any } }) => {
      setType({ [typeKey]: e.target.value });
    },
    [setType, typeKey]
  );

  return (
    <Box sx={{ minWidth: SELECT_WIDTH }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" id="demo-simple-select-label" htmlFor="uncontrolled-native">
          {t(`common.${typeKey}.tag`)}
        </InputLabel>
        <NativeSelect
          id="demo-simple-select-label"
          onChange={onChangeFilter}
          value={param[typeKey]}
          name={typeKey}
        >
          {typeOptions[typeKey].map((option: string) => (
            <option key={option} value={option}>
              {option === '' ? '' : t(`common.${typeKey}.${option}`)}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default OtherType;
