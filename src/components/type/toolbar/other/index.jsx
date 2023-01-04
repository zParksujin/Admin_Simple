import { Box, FormControl, InputLabel, NativeSelect } from '@mui/material';
import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import userListBodyAtom from '@/recoil/user/list/parmas/atom';

const SELECT_WIDTH = 100;

const OtherType = ({ typeOptions, typeKey, setType }) => {
  const body = useRecoilValue(userListBodyAtom);

  const onChangeFilter = useCallback((e) => {
    setType({ [typeKey]: e.target.value });
  }, [setType, typeKey]);

  return (
    <Box sx={{ minWidth: SELECT_WIDTH }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" id="demo-simple-select-label" htmlFor="uncontrolled-native">{typeKey}</InputLabel>
        <NativeSelect
          id="demo-simple-select-label"
          onChange={onChangeFilter}
          value={body[typeKey]}
          label={typeKey}
          name={typeKey}
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
  );
};

export default OtherType;
