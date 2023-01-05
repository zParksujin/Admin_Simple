import React, { useMemo } from 'react';
import { IconButton, Stack } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchType from './search';
import OtherType from './other';
import DateType from './date';

const TableToolbar = ({ setType, setSearchType, typeKey, param, typeOptions, onResetType }) => {

  const renderTypes = useMemo(
    () =>
      typeKey.map((v, i) => {
        switch (v) {
          case 'search_type':
            return (
              <SearchType
                key={i}
                typeOptions={typeOptions}
                setSearchType={setSearchType}
                param={param}
                typeKey={v}
              />
            );
          case 'date_type':
            return (
              <DateType
                key={i}
                param={param}
                typeOptions={typeOptions}
                setType={setType}
                typeKey={v}
              />
            );

          default:
            return (
              <OtherType
                key={i}
                param={param}
                typeOptions={typeOptions}
                setType={setType}
                typeKey={v}
              />
            );
        }
      }),
    [param, setSearchType, setType, typeKey, typeOptions]
  );

  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ px: 2.5, py: 3 }}
    >
      {renderTypes}
      <IconButton onClick={onResetType}>
        <RestartAltIcon />
      </IconButton>
    </Stack>
  );
};

export default TableToolbar;
