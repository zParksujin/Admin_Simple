import React, { useMemo, useState } from 'react';
import { Stack } from '@mui/material';

import SearchType from './search';
import OtherType from './other';
import DateType from './date';

const TableToolbar = ({ setType, typeKey, date, search, typeOptions }) => {
  const [filterService, setFilterService] = useState('all');
  const [filterStartDate, setFilterStartDate] = useState(null);
  const [filterEndDate, setFilterEndDate] = useState(null);

  const renderTypes = useMemo(
    () =>
      typeKey.map((v, i) => {
        switch (v) {
          case 'search_type':
            return (
              <SearchType
                key={i}
                typeOptions={typeOptions}
                setType={setType}
                typeKey={v}
              />
            );
          case 'date_type':
            return (
              <DateType
                key={i}
                filterStartDate={filterStartDate}
                setFilterStartDate={setFilterStartDate}
                filterEndDate={filterEndDate}
                setFilterEndDate={setFilterEndDate}
                filterService={filterService}
                setFilterService={setFilterService}
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
    [filterEndDate, filterService, filterStartDate, setType, typeKey, typeOptions]
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
