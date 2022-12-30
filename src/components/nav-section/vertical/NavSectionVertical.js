import PropTypes from 'prop-types';
// @mui
import { List, Stack } from '@mui/material';
// locales
import { useRecoilValueLoadable } from 'recoil';
import NavList from './NavList';
import { menuSelector } from '@/recoil/menu';

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
};

export default function NavSectionVertical({ sx, ...other }) {
  const {
    state,
    contents: { data },
  } = useRecoilValueLoadable(menuSelector);

  if (state !== 'hasValue') {
    return null;
  }

  return (
    <Stack sx={sx} {...other}>
      <List disablePadding sx={{ px: 2 }}>
        {Object.keys(data).map((item) => {
          const menu = data[item];
          return <NavList key={menu?.menu_idx} data={menu} depth={1} hasChild={!!menu.menus} />;
        })}
      </List>
    </Stack>
  );
}
