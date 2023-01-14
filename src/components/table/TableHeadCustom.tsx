import {
  Box,
  Checkbox,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
  SxProps,
} from '@mui/material';
import { ChangeEvent } from 'react';

// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

interface ITableHeadCustom {
  sx?: SxProps;
  onSort?: (cellId: string | number) => void;
  orderBy?: string;
  rowCount?: number;
  numSelected?: number;
  onSelectAllRows?: (e: ChangeEvent<HTMLInputElement>) => void;
  topColumns?: any[];
  bottomColumns: any[];
  order?: 'asc' | 'desc';
}

export default function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  topColumns = [],
  bottomColumns,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
}: ITableHeadCustom): JSX.Element {
  return (
    <TableHead sx={sx}>
      <TableRow>
        {topColumns.map((v) => (
          <TableCell
            key={v.label}
            align="center"
            colSpan={v?.colSpan ? v?.colSpan : 1}
            sx={{
              background: (theme) => theme.palette.background.paper,
              // border: 'solid 1px #000',
            }}
          >
            {v.label}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        {onSelectAllRows && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event: { target: { name: any; checked: any } }) => {
                const { checked } = event.target;
                onSelectAllRows(checked);
              }}
            />
          </TableCell>
        )}

        {bottomColumns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            {onSort ? (
              <TableSortLabel
                hideSortIcon
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => onSort(headCell.id)}
                sx={{ textTransform: 'capitalize' }}
              >
                {headCell.label}

                {orderBy === headCell.id ? (
                  <Box sx={{ ...visuallyHidden }}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
