import { MenuItem, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';

const INPUT_WIDTH = 160;

const DateType = ({
  optionsService,
  filterStartDate,
  setFilterStartDate,
  filterEndDate,
  setFilterEndDate,
  filterService,
  setFilterService,
  typeOptions,
  typeKey,
}) => {
  const onFilterService = (event) => {
    // setPage(0);
    setFilterService(event.target.value);
  };
  return (
    <>
      <TextField
        fullWidth
        select
        label="일자"
        value={filterService}
        onChange={onFilterService}
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

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start date"
          value={filterStartDate}
          onChange={(newValue) => {
            setFilterStartDate(newValue);
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
        <DatePicker
          label="End date"
          value={filterEndDate}
          onChange={(newValue) => {
            setFilterEndDate(newValue);
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
    </>
  );
};

export default DateType;
