import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  NativeSelect,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Iconify from '@/components/iconify';
import userListBodyAtom from '@/recoil/user/list/parmas/atom';

const INPUT_WIDTH = 110;
const SELECT_WIDTH = 100;

const SearchType = ({ typeOptions, typeKey, setSearchType }) => {
  const body = useRecoilValue(userListBodyAtom);
  const [searchText, setSearchText] = useState('');

  const returnValue = () => {
    let result = '';
    typeOptions[typeKey].forEach(v => {
      // eslint-disable-next-line consistent-return
      Object.keys(body).forEach((item) => {
        if (v === item){
          result = v;
      }
      })
    })
    return result;
}

  const onChangeFilter = (e) => {
    e.preventDefault();
    const copy = {...body, [e.target.value || 'profile_id']: searchText};
    delete copy[returnValue()]
    setSearchType({ ...copy });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const copy = {...body, [returnValue() || 'profile_id']: searchText};
    setSearchType({ ...copy });
  }

  return (
    <>
      <Box sx={{ minWidth: SELECT_WIDTH }}>
        <FormControl fullWidth>
          <InputLabel variant="standard" id="demo-simple-select-label" htmlFor="uncontrolled-native">{typeKey}</InputLabel>
          <NativeSelect
            id="uncontrolled-native"
            onChange={onChangeFilter}
            label={typeKey}
            value={returnValue()}
          >
            {typeOptions[typeKey].map((option) => (
              <option
                key={option}
                value={option}
              >
                {option}
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
