import React, { useMemo } from 'react';
import { Stack } from '@mui/material';

import SearchType from './search';
import OtherType from './other';
import DateType from './date';

const TableToolbar = ({ setType, setSearchType, typeKey, date, search, typeOptions }) => {

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
                typeKey={v}
              />
            );
          case 'date_type':
            return (
              <DateType
                key={i}
                typeOptions={typeOptions}
                setType={setType}
                typeKey={v}
              />
            );

          default:
            return (
              <OtherType
                key={i}
                typeOptions={typeOptions}
                setType={setType}
                typeKey={v}
              />
            );
        }
      }),
    [setSearchType, setType, typeKey, typeOptions]
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
    </Stack>
  );
};

export default TableToolbar;
