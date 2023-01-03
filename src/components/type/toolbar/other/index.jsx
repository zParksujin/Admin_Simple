import {  MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';

const INPUT_WIDTH = 160;

const OtherType = ({typeOptions, typeKey, setType}) => {
  const [anchor, setAnchor] = useState(null);
    console.log(typeOptions[typeKey]);
    const onChangeFilter = (e) => {
      setType({ [typeKey]: e.target.value})
    }
  return (
    <TextField
        fullWidth
        select
        label={typeKey}
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
            onClick={() => setAnchor(null)}
            sx={{
              mx: 1,
              borderRadius: 0.75,
              typography: 'body2',
              textTransform: 'capitalize',
            }}
          >
            {option || 'All'}
          </MenuItem>
        ))}
      </TextField>
  );
};

export default OtherType;
