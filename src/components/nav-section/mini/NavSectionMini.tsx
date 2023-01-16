// @ts-nocheck
import { memo } from 'react';
import { Box, Stack, SxProps } from '@mui/material';
import { useRecoilValueLoadable } from 'recoil';
import { menuSelector } from '@/recoil/menu';
import NavList from './NavList';
import { IMyMenuItem } from '@/api/menu/type';

interface INavSectionMini {
  sx?: SxProps;
}

function NavSectionMini({ sx, ...other }: INavSectionMini): JSX.Element | null {
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
      <Items items={data} />
    </Stack>
  );
}

export default memo(NavSectionMini);

interface IItems {
  items: IMyMenuItem[];
}

function Items({ items }: IItems) {
  return (
    <>
      {Object.keys(items).map((item: string) => {
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
