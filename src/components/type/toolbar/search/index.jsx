import { InputAdornment, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import Iconify from '@/components/iconify';

const INPUT_WIDTH = 160;

const SearchType = ({ typeOptions, typeKey, setType }) => {
  const [searchText, setSearchText] = useState();

  const onChangeFilter = (e) => {
    setType({ [e.target.value]: searchText });
  };

  return (
    <>
      <TextField
        fullWidth
        select
        label="검색어"
        // value={filterService}
        onChange={onChangeFilter}
        SelectProps={{
          MenuProps: {
            PaperProps: {
              sx: { maxHeight: 220 },
            },
          },
        }}
        sx={{
          maxWidth: { md: INPUT_WIDTH },
          textTransform: 'capitalize',
        }}
      >
        {typeOptions[typeKey].map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              mx: 1,
              borderRadius: 0.75,
              typography: 'body2',
              textTransform: 'capitalize',
            }}
          >
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
        placeholder="Search client or invoice number..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchType;
