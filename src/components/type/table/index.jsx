import React, { useCallback, useState } from 'react';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';

import Scrollbar from '@/components/scrollbar';
import { TableNoData, TablePaginationCustom } from '@/components/table';
import CustomBodyRows from './customBody';
import CustomBodyHeaders from './customHeader';
import CustomPopover from './popover';

function TableComponent({ page, setType, total, limit, subColumns = [], mainColumns, data }) {
  const [openConfirm, setOpenConfirm] = useState(false);

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const onChangeOffset = useCallback(
    (e, newPage) => {
      console.log(newPage, limit);
      setType({ offset: newPage * limit });
    },
    [limit, setType]
  );

  const onChangeLimit = useCallback(
    (e) => {
      console.log(e.target.value);
      setType({ limit: parseInt(e.target.value, 10) });
    },
    [setType]
  );

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ overflow: 'unset' }}>
        <Scrollbar sx={{ maxHeight: 500 }}>
          <Table stickyHeader sx={{ minWidth: 800 }}>
            <CustomBodyHeaders subColumns={subColumns} mainColumns={mainColumns} />
            <TableBody>
              {data === null ? (
                <TableNoData isNotFound={false} />
              ) : (
                <>
                  <CustomBodyRows
                    data={data}
                    mainColumns={mainColumns}
                    openPopover={openPopover}
                    handleOpenPopover={handleOpenPopover}
                  />
                  <CustomPopover
                    openPopover={openPopover}
                    handleClosePopover={handleClosePopover}
                    handleOpenConfirm={handleOpenConfirm}
                    openConfirm={openConfirm}
                    handleCloseConfirm={handleCloseConfirm}
                  />
                </>
              )}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>

      {page !== undefined && (
        <TablePaginationCustom
          count={total}
          page={page}
          rowsPerPage={limit}
          onPageChange={onChangeOffset}
          onRowsPerPageChange={onChangeLimit}
        />
      )}
    </Paper>
  );
}

export default TableComponent;
