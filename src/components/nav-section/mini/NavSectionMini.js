import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { Box, Stack } from '@mui/material';
//
import { useRecoilValueLoadable } from 'recoil';
import NavList from './NavList';
import { menuSelector } from '@/recoil/menu';

// ----------------------------------------------------------------------

NavSectionMini.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
};

function NavSectionMini({ sx, ...other }) {
  const {
    state,
    contents: { data },
  } = useRecoilValueLoadable(menuSelector);

  if (state !== 'hasValue') {
    return null;
  }

  return (
    <Stack
      spacing={0.5}
      alignItems="center"
      sx={{
        px: 0.75,
        ...sx,
      }}
      {...other}
    >
      <Items items={data} isLastGroup />
    </Stack>
  );
}

export default memo(NavSectionMini);

// ----------------------------------------------------------------------

Items.propTypes = {
  items: PropTypes.array,
};

function Items({ items }) {
  return (
    <>
      {Object.keys(items).map((item) => {
        const menu = items[item];
        return (
          <NavList key={menu.title + menu.path} data={menu} depth={1} hasChild={!!menu.menus} />
        );
      })}

      <Box
        sx={{
          width: 24,
          height: '1px',
          bgcolor: 'divider',
          my: '8px !important',
        }}
      />
    </>
  );
}
