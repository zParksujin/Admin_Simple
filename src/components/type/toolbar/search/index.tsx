import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { SetterOrUpdater } from 'recoil';
import Iconify from '@/components/iconify';
import { useLocales } from '@/locales';

const INPUT_WIDTH = 110;
const SELECT_WIDTH = 100;

interface ISearchType {
  typeOptions: Record<string, any>;
  typeKey: string;
  setSearchType: SetterOrUpdater<any>;
  param: any;
}

const SearchType = ({ typeOptions, typeKey, setSearchType, param }: ISearchType) => {
  const [searchText, setSearchText] = useState('');
  const { t } = useLocales();

  const returnValue = () => {
    let result = '';
    typeOptions[typeKey].forEach((v: string) => {
      Object.keys(param).forEach((item) => {
        if (v === item) {
          result = v;
        }
      });
    });
    return result;
  };

  const onChangeFilter = (e: { preventDefault: () => void; target: { value: any } }) => {
    e.preventDefault();
    const copy = { ...param, [e.target.value || 'profile_id']: searchText };
    console.log(copy, e.target.value);
    delete copy[returnValue()];
    setSearchType({ ...copy });
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const copy = { ...param, [returnValue() || 'profile_id']: searchText };
    setSearchType({ ...copy });
  };

  return (
    <>
      <Box sx={{ minWidth: SELECT_WIDTH }}>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            id="demo-simple-select-label"
            htmlFor="uncontrolled-native"
          >
            {t(`common.${typeKey}.tag`)}
          </InputLabel>
          <NativeSelect id="uncontrolled-native" onChange={onChangeFilter} value={returnValue()}>
            {typeOptions[typeKey].map((option: string) => (
              <option key={option} value={option}>
                {t(`common.search_type.${option}`)}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box component="form" onSubmit={onSubmit} sx={{ minWidth: INPUT_WIDTH }}>
        <TextField
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default SearchType;
