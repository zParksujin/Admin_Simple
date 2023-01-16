import React, { useCallback, useState } from 'react';
import { Table, TableBody, TableContainer, Paper } from '@mui/material';

import { SetterOrUpdater } from 'recoil';
import Scrollbar from '@/components/scrollbar';
import { TableNoData, TablePaginationCustom } from '@/components/table';
import CustomBodyRows from './customBody';
import CustomBodyHeaders from './customHeader';
import CustomPopover from './popover';

interface ITableComponent {
  page: number;
  setType: SetterOrUpdater<any>;
  total: number;
  limit: number;
  subColumns?: Record<string, string>[];
  mainColumns: Record<string, string>[];
  data: any;
}

function TableComponent({
  page,
  setType,
  total,
  limit,
  subColumns = [],
  mainColumns,
  data,
}: ITableComponent) {
  const [openConfirm, setOpenConfirm] = useState(false);

  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event: { currentTarget: React.SetStateAction<null> }) => {
    setOpenPopover(event.currentTarget);
  };

  const onChangeOffset = useCallback(
    (_e: any, newPage: number) => {
      console.log(newPage, limit);
      setType({ offset: newPage * limit });
    },
    [limit, setType]
  );

  const onChangeLimit = useCallback(
    (e: { target: { value: string } }) => {
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
                    openConfirm={openConfirm}
                    openPopover={openPopover}
                    handleClosePopover={handleClosePopover}
                    handleOpenConfirm={handleOpenConfirm}
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
