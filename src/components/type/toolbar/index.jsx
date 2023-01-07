import React, { useMemo, useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchType from './search';
import OtherType from './other';
import DateType from './date';

const TableToolbar = ({ setType, setSearchType, typeKey, param, typeOptions, onResetType }) => {
  const [startDate, setStartDate] = useState(param?.start_date || '');
  const [endDate, setEndDate] = useState(param?.end_date || '');
  const [dateType, setDateType] = useState(param?.date_type || null);

  const onResetParams = () => {
    onResetType();
    setDateType(param?.date_type || null);
    setStartDate('');
    setEndDate('');
  };

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
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                dateType={dateType}
                setDateType={setDateType}
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
    [dateType, endDate, param, setSearchType, setType, startDate, typeKey, typeOptions]
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
      <IconButton onClick={onResetParams}>
        <RestartAltIcon />
      </IconButton>
    </Stack>
  );
};

export default TableToolbar;
