import { Divider, MenuItem } from '@mui/material';
import React from 'react';
import Iconify from '@/components/iconify';
import MenuPopover from '@/components/menu-popover';

interface ICustomPopover {
  openConfirm: boolean;
  openPopover: any | null;
  handleClosePopover: () => void;
  handleOpenConfirm: () => void;
  handleCloseConfirm: () => void;
}

const CustomPopover = ({
  openPopover,
  openConfirm,
  handleClosePopover,
  handleOpenConfirm,
  handleCloseConfirm,
}: ICustomPopover) => {
  return (
    <MenuPopover
      open={openPopover}
      onClose={handleClosePopover}
      arrow="right-top"
      sx={{ width: 160 }}
    >
      <MenuItem>
        <Iconify icon="eva:eye-fill" />
        View
      </MenuItem>

      <MenuItem>
        <Iconify icon="eva:edit-fill" />
        Edit
      </MenuItem>

      <Divider sx={{ borderStyle: 'dashed' }} />

      <MenuItem
        onClick={() => {
          handleOpenConfirm();
          handleClosePopover();
          handleCloseConfirm();
          console.log(openConfirm);
        }}
        sx={{ color: 'error.main' }}
      >
        <Iconify icon="eva:trash-2-outline" />
        Delete
      </MenuItem>
    </MenuPopover>
  );
};

export default CustomPopover;
