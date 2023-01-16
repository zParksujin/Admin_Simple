// @ts-nocheck
import { IconButton, TableCell, TableRow } from '@mui/material';
import React from 'react';
import Iconify from '@/components/iconify';
import { Comma } from '@/utils/Comma';

interface ICustomBodyRows {
  data: any;
  mainColumns: Record<string, any>[];
  openPopover: any | null;
  handleOpenPopover: (event: { currentTarget: React.SetStateAction<null> }) => void;
}
const CustomBodyRows = ({ data, mainColumns, openPopover, handleOpenPopover }: ICustomBodyRows) => (
  <>
    {data.map((row: { [x: string]: any }, index: React.Key | null | undefined) => (
      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
        {mainColumns.map((column) => {
          const value = row[column.id];

          if (column?.button) {
            return (
              <TableCell key={column.id} align="right">
                <IconButton color={openPopover ? 'inherit' : 'default'} onClick={handleOpenPopover}>
                  <Iconify icon="eva:more-vertical-fill" />
                </IconButton>
              </TableCell>
            );
          }
          return (
            <TableCell key={column.id} align={column.align}>
              {column.comma && typeof value === 'number' ? Comma(value) : value}
            </TableCell>
          );
        })}
      </TableRow>
    ))}
  </>
);

export default CustomBodyRows;
