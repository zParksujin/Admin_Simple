import { List, Stack } from '@mui/material';
import { SxProps } from '@mui/system';
// locales
import { useRecoilValueLoadable } from 'recoil';
import NavList from './NavList';
import { menuSelector } from '@/recoil/menu';

// ----------------------------------------------------------------------

interface INavSectionVertical {
  sx?: SxProps;
}

export default function NavSectionVertical({
  sx,
  ...other
}: INavSectionVertical): JSX.Element | null {
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
