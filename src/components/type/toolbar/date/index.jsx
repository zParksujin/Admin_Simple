import React, { useEffect, useCallback } from 'react';
import { Box, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material';
import dayjs from 'dayjs';

const INPUT_WIDTH = 160;
const SELECT_WIDTH = 100;

const DateType = ({
  typeOptions,
  typeKey,
  setType,
  param,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  dateType,
  setDateType,
}) => {
  const onSearchDate = useCallback(() => {
    setType({ start_date: startDate, end_date: endDate });
  }, [endDate, setType, startDate]);

  const onChangeFilter = (e) => {
    setDateType(e.target.value);
  };

  console.log('startDate, endDate', startDate, endDate, param?.start_date, param?.end_date);
  useEffect(() => {
    if (startDate && endDate && ((typeOptions && dateType) || !typeOptions)) {
      onSearchDate();
    }
  }, [endDate, onSearchDate, startDate, dateType, typeOptions, param?.start_date, param?.end_date]);

  return (
    <>
      {typeOptions && (
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
      )}
      <Box sx={{ minWidth: INPUT_WIDTH }}>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider> */}
        <TextField
          id="date"
          label="Start date"
          type="date"
          // defaultValue="2017-05-24"
          sx={{ width: INPUT_WIDTH }}
          InputLabelProps={{
            shrink: true,
          }}
          value={param?.start_date || startDate}
          onChange={(e) => {
            const startDay = dayjs(e.currentTarget.value, 'YYYY-MM-DD');
            setStartDate(startDay.format('YYYY-MM-DD'));
            if (param?.end_date) {
              setEndDate(param?.end_date)
            }
          }}
          // inputFormat="YYYY-MM-DD"
        />
      </Box>
      <Box sx={{ minWidth: INPUT_WIDTH }}>
        <TextField
          id="date"
          label="End date"
          type="date"
          sx={{ width: INPUT_WIDTH }}
          InputLabelProps={{
            shrink: true,
          }}
          value={param?.end_date || endDate}
          onChange={(e) => {
            const endDay = dayjs(e.currentTarget.value, 'YYYY-MM-DD');
            setEndDate(endDay.format('YYYY-MM-DD'));
            if (param?.start_date) {
              setStartDate(param?.start_date)
            }
          }}
          // inputFormat="YYYY-MM-DD"
        />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
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
        </LocalizationProvider> */}
      </Box>
    </>
  );
};

export default DateType;
