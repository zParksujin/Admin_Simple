import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Typography, IconButton } from '@mui/material';
// utils
// _mock_
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import MenuPopover from '../../../components/menu-popover';

// ----------------------------------------------------------------------

const ITEM_HEIGHT = 64;

export default function ContactsPopover() {
  const [openPopover, setOpenPopover] = useState(null);

  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  return (
    <>
      <IconButton
        color={openPopover ? 'primary' : 'default'}
        onClick={handleOpenPopover}
        sx={{
          width: 40,
          height: 40,
          ...(openPopover && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
          }),
        }}
      >
        <Iconify icon="eva:people-fill" />
      </IconButton>

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 320 }}>
        <Typography variant="h6" sx={{ p: 1.5 }}>
          {/* Contacts <Typography component="span">({_contacts.length})</Typography> */}
        </Typography>

        <Scrollbar sx={{ height: ITEM_HEIGHT * 6 }}>
          {/* {_contacts.map((contact) => (
            <MenuItem key={contact.id} sx={{ height: ITEM_HEIGHT }}>
              <ListItemAvatar>
                <CustomAvatar
                  src={contact.avatar}
                  BadgeProps={{
                    badgeContent: <BadgeStatus status={contact.status} />,
                  }}
                />
              </ListItemAvatar>

              <ListItemText
                primary={contact.name}
                secondary={contact.status === 'offline' ? fToNow(contact.lastActivity) : ''}
                primaryTypographyProps={{ typography: 'subtitle2', sx: { mb: 0.25 } }}
                secondaryTypographyProps={{ typography: 'caption' }}
              />
            </MenuItem>
          ))} */}
        </Scrollbar>
      </MenuPopover>
    </>
  );
}
