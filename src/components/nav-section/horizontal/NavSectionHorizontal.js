import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { Stack } from '@mui/material';
// utils
import { useRecoilValueLoadable } from 'recoil';
import { hideScrollbarY } from '../../../utils/cssStyles';
//
import NavList from './NavList';
import { menuSelector } from '@/recoil/menu';

// ----------------------------------------------------------------------

NavSectionHorizontal.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
};

function NavSectionHorizontal({ sx, ...other }) {
  const {
    state,
    contents: { data },
  } = useRecoilValueLoadable(menuSelector);

  if (state !== 'hasValue') {
    return null;
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mx: 'auto',
        ...hideScrollbarY,
        ...sx,
      }}
      {...other}
    >
      <Items items={data} />
    </Stack>
  );
}

export default memo(NavSectionHorizontal);

// ----------------------------------------------------------------------

Items.propTypes = {
  items: PropTypes.array,
};

function Items({ items }) {
  return (
    <>
      {items.map((menu) => (
        <NavList key={menu.title + menu.path} data={menu} depth={1} hasChild={!!menu.menus} />
      ))}
    </>
  );
}
