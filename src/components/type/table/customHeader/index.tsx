// @mui
import {
  Box,
  Checkbox,
  TableRow,
  TableCell,
  TableHead,
  TableSortLabel,
  SxProps,
  SortDirection,
} from '@mui/material';

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

interface ICustomBodyHeaders {
  order?: SortDirection;
  orderBy?: string;
  rowCount?: number;
  subColumns?: Record<string, any>[];
  mainColumns: Record<string, any>[];
  numSelected?: number;
  onSort?: (a: number | string) => void;
  onSelectAllRows?: (a: boolean) => void;
  sx?: SxProps;
}
export default function CustomBodyHeaders({
  order,
  orderBy,
  rowCount = 0,
  subColumns = [],
  mainColumns,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
}: ICustomBodyHeaders) {
  return (
    <TableHead sx={sx}>
      <TableRow>
        {subColumns.map((v) => (
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
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </TableCell>
        )}

        {mainColumns.map((headCell) => (
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
                direction={orderBy === headCell.id ? (order as 'asc' | 'desc' | undefined) : 'asc'}
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
