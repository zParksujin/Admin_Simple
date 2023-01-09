import { Divider, MenuItem } from '@mui/material';
import React from 'react';
import Iconify from '@/components/iconify';
import MenuPopover from '@/components/menu-popover';

const CustomPopover = ({
  openPopover,
  handleClosePopover,
  handleOpenConfirm,
  openConfirm,
  handleCloseConfirm,
}) => (
  <MenuPopover
      open={openPopover}
      onClose={handleClosePopover}
      arrow="right-top"
      sx={{ width: 160 }}
    >
      <MenuItem
        onClick={() => {
          // onViewRow();
          // handleClosePopover();
        }}
      >
        <Iconify icon="eva:eye-fill" />
        View
      </MenuItem>

      <MenuItem
        onClick={() => {
          // onEditRow();
          // handleClosePopover();
        }}
      >
        <Iconify icon="eva:edit-fill" />
        Edit
      </MenuItem>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <MenuItem
        onClick={() => {
          handleOpenConfirm();
          handleClosePopover();
        }}
        sx={{ color: 'error.main' }}
      >
        <Iconify icon="eva:trash-2-outline" />
        Delete
      </MenuItem>
    </MenuPopover>
);

export default CustomPopover;
