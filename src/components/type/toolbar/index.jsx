import React, { useMemo, useState } from 'react';
import { IconButton, Stack } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SearchType from './search';
import OtherType from './other';
import DateType from './date';
import ToggleType from './toggle';

const Toolbar = ({ setType, setSearchType, typeKey, param, typeOptions, onResetType, toggleTypeList, setToggle, toggle, tab }) => {
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
              case 'toggle':
                return (
                <React.Fragment key={v}>
                  {tab === 1 && (
                    <ToggleType
                    
                    toggleTypeList={toggleTypeList}
                    setToggle={setToggle}
                    toggle={toggle}
                  />
                  )}
                  </React.Fragment>
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
    [dateType, endDate, param, setSearchType, setToggle, setType, startDate, tab, toggle, toggleTypeList, typeKey, typeOptions]
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

export default Toolbar;
