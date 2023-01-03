import PropTypes from 'prop-types';
// @mui
import { Box, TablePagination } from '@mui/material';

export default function TablePaginationCustom({
  rowsPerPageOptions = [10, 20, 30, 50, 100],
  sx,
  ...other
}) {
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      <TablePagination rowsPerPageOptions={rowsPerPageOptions} component="div" {...other} />
    </Box>
  );
}
