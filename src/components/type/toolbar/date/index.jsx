import React, { useState, useEffect, useCallback, memo } from 'react';
import { Box, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const INPUT_WIDTH = 160;
const SELECT_WIDTH = 100;

const DateType = ({ typeOptions, typeKey, setType, param }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [dateType, setDateType] = useState(param.date_type);

  const onSearchDate = useCallback(() => {
    setType({ start_date: startDate, end_date: endDate });
  }, [endDate, setType, startDate]);

  const onChangeFilter = (e) => {
    setDateType(e.target.value);
  };

  useEffect(() => {
    if (startDate && endDate && dateType) {
      onSearchDate();
    }
  }, [endDate, onSearchDate, startDate, dateType]);

  return (
    <>
      <Box sx={{ minWidth: SELECT_WIDTH }}>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            id="demo-simple-select-label"
            htmlFor="uncontrolled-native"
          >
            {typeKey}
          </InputLabel>
          <NativeSelect
            id="uncontrolled-native"
            onChange={onChangeFilter}
            value={dateType}
            name={typeKey}
            label={typeKey}
          >
            {typeOptions[typeKey].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: INPUT_WIDTH }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start date"
            value={startDate}
            inputFormat="YYYY-MM-DD"
            onChange={(newValue) => {
              const startDay = dayjs(newValue, 'YYYY-MM-DD');
              setStartDate(startDay.format('YYYY-MM-DD'));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                sx={{
                  maxWidth: { md: INPUT_WIDTH },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
      <Box sx={{ minWidth: INPUT_WIDTH }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End date"
            value={endDate}
            inputFormat="YYYY-MM-DD"
            onChange={(newValue) => {
              const endDay = dayjs(newValue, 'YYYY-MM-DD');
              setEndDate(endDay.format('YYYY-MM-DD'));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                sx={{
                  maxWidth: { md: INPUT_WIDTH },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default memo(DateType);
