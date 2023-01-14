import { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
// @mui
import { Collapse } from '@mui/material';
// hooks
import useActiveLink from '../../../hooks/useActiveLink';
//
import NavItem from './NavItem';
import { IAdminMenuItem } from '@/api/menu/type';

// ----------------------------------------------------------------------

interface INavList {
  data: IAdminMenuItem;
  depth: number;
  hasChild: boolean;
}

function NavList({ data, depth, hasChild }: INavList): JSX.Element | null {
  const { pathname } = useLocation();

  const { active, isExternalLink } = useActiveLink(data.path);

  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (data?.path && data?.path?.includes('[0-9]+')) {
    return null;
  }

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onClick={handleToggle}
      />

      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList data={data.menus} depth={depth} />
        </Collapse>
      )}
    </>
  );
}

export default memo(NavList);

// ----------------------------------------------------------------------

interface INavSubList {
  data: IAdminMenuItem[] | undefined;
  depth: number;
}

function NavSubList({ data, depth }: INavSubList) {
  return (
    <>
      {data &&
        data.map((list) => (
          <NavList
            key={list.menu_idx + list.sub_title}
            data={list}
            depth={depth + 1}
            hasChild={!!list.menus}
          />
        ))}
    </>
  );
}
