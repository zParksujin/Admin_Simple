import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import Iconify from '@/components/iconify';

const CustomBodyRows = ({ data, mainColumns, openPopover, handleOpenPopover }) => (
    <>
      {data.map((row, index) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
          {mainColumns.map((column) => {
            const value = row[column.id];

            if (column?.button) {
              return (
                <TableCell key={column.id} align="right">
                  <IconButton
                    color={openPopover ? 'inherit' : 'default'}
                    onClick={handleOpenPopover}
                  >
                    <Iconify icon="eva:more-vertical-fill" />
                  </IconButton>
                </TableCell>
              );
            }
            return (
              <TableCell key={column.id} align={column.align}>
                {column.format && typeof value === 'number' ? column.format(value) : value}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );

export default CustomBodyRows;
