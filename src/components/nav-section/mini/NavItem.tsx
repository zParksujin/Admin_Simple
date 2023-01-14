// @ts-nocheck
import { forwardRef, memo, RefObject, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Tooltip, Link, ListItemText } from '@mui/material';
// locales
import { useLocales } from '@/locales';
// auth
import RoleBasedGuard from '../../../auth/RoleBasedGuard';
//
import Iconify from '../../iconify';
import { StyledItem, StyledIcon } from './styles';
import { ICONS } from '@/layouts/dashboard/nav/config-navigation';
import { ROOTS_DASHBOARD } from '@/routes/paths';

interface INavItem {
  open?: boolean;
  active?: boolean;
  item: IItem;
  depth?: number;
  isExternalLink?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface IItem {
  title: string;
  sub_title?: string;
  path?: string;
  menus?: Record<string, any>;
  disabled?: boolean;
  caption?: string;
  roles?: string[];
}

const NavItem = forwardRef(
  (
    { item, depth, open, active, isExternalLink, onMouseEnter, onMouseLeave }: INavItem,
    ref
  ): JSX.Element => {
    const { t } = useLocales();

    const {
      title,
      sub_title,
      path,
      // icon,
      menus,
      disabled,
      caption,
      roles,
    } = item;

    const subItem = depth !== 1;

    const renderContent = useMemo(
      () => (
        <StyledItem
          ref={ref as RefObject<HTMLDivElement>}
          open={open}
          depth={depth}
          active={active}
          disabled={disabled}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* TODO ADD ICON */}
          {!path && <StyledIcon>{ICONS.user}</StyledIcon>}

          <ListItemText
            primary={`${t(sub_title || title)}`}
            primaryTypographyProps={{
              noWrap: true,
              sx: {
                width: 72,
                fontSize: 10,
                lineHeight: '16px',
                textAlign: 'center',
                ...(active && {
                  fontWeight: 'fontWeightMedium',
                }),
                ...(subItem && {
                  fontSize: 14,
                  width: 'auto',
                  textAlign: 'left',
                }),
              },
            }}
          />

          {caption && (
            <Tooltip title={`${t(caption)}`} arrow placement="right">
              <Iconify
                icon="eva:info-outline"
                width={16}
                sx={{
                  top: 11,
                  left: 6,
                  position: 'absolute',
                }}
              />
            </Tooltip>
          )}

          {!!menus && (
            <Iconify
              width={16}
              icon="eva:chevron-right-fill"
              sx={{
                top: 11,
                right: 6,
                position: 'absolute',
              }}
            />
          )}
        </StyledItem>
      ),
      [
        active,
        caption,
        depth,
        disabled,
        menus,
        open,
        path,
        ref,
        subItem,
        sub_title,
        t,
        title,
        onMouseEnter,
        onMouseLeave,
      ]
    );

    const renderItem = () => {
      // Has child
      if (menus) {
        return renderContent;
      }

      // ExternalLink
      if (isExternalLink)
        return (
          <Link href={ROOTS_DASHBOARD + path} target="_blank" rel="noopener" underline="none">
            {renderContent}
          </Link>
        );

      // Default
      return (
        <Link component={RouterLink} to={ROOTS_DASHBOARD + path} underline="none">
          {renderContent}
        </Link>
      );
    };

    return <RoleBasedGuard roles={roles}> {renderItem()} </RoleBasedGuard>;
  }
);

export default memo(NavItem);
