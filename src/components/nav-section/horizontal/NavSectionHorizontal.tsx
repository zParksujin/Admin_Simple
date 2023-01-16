// @ts-nocheck
import { memo } from 'react';
import { Stack } from '@mui/material';
import { SxProps } from '@mui/system';
import { useRecoilValueLoadable } from 'recoil';
import { hideScrollbarY } from '../../../utils/cssStyles';
import NavList from './NavList';
import { menuSelector } from '@/recoil/menu';
import { IMyMenuItem } from '@/api/menu/type';

interface INavSectionHorizontal {
  sx?: SxProps;
}

function NavSectionHorizontal({ sx, ...other }: INavSectionHorizontal): JSX.Element | null {
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

interface IItems {
  items: IMyMenuItem[];
}

function Items({ items }: IItems) {
  return (
    <>
      {items.map((menu) => (
        <NavList key={menu.title + menu.path} data={menu} depth={1} hasChild={!!menu.menus} />
      ))}
    </>
  );
}
