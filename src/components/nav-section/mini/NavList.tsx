import { useState, useEffect, useRef, memo } from 'react';
import { useLocation } from 'react-router-dom';
// hooks
import useActiveLink from '../../../hooks/useActiveLink';
//
import { StyledPopover } from './styles';
import NavItem from './NavItem';
import { IAdminMenuItem } from '@/api/menu/type';

interface INavList {
  data: IAdminMenuItem;
  depth: number;
  hasChild: boolean;
}

function NavList({ data, depth, hasChild }: INavList): JSX.Element | null {
  const navRef = useRef(null);

  const { pathname } = useLocation();

  const { active, isExternalLink } = useActiveLink(data.path);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const appBarEl = Array.from(
      document.querySelectorAll('.MuiAppBar-root') as NodeListOf<HTMLElement>
    );

    // Reset styles when hover
    const styles = () => {
      document.body.style.overflow = '';
      document.body.style.padding = '';
      // Apply for Window
      appBarEl.forEach((elem) => {
        elem.style.padding = '';
      });
    };

    if (open) {
      styles();
    } else {
      styles();
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
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
        ref={navRef}
        item={data}
        depth={depth}
        open={open}
        active={active}
        isExternalLink={isExternalLink}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      />

      {hasChild && (
        <StyledPopover
          open={open}
          anchorEl={navRef.current}
          anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
          transformOrigin={{ vertical: 'center', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          <NavSubList data={data?.menus} depth={depth} />
        </StyledPopover>
      )}
    </>
  );
}

export default memo(NavList);

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
            key={list.title + list.path}
            data={list}
            depth={depth + 1}
            hasChild={!!list.menus}
          />
        ))}
    </>
  );
}
