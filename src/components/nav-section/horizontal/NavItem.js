import PropTypes from 'prop-types';
import { forwardRef, memo, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Tooltip, ListItemText, Link } from '@mui/material';
// locales
import { useLocales } from '@/locales';

// auth
import RoleBasedGuard from '../../../auth/RoleBasedGuard';
//
import Iconify from '../../iconify';
import { StyledItem, StyledIcon } from './styles';
import { ICONS } from '@/layouts/dashboard/nav/config-navigation';
import { ROOTS_DASHBOARD } from '@/routes/paths';

// ----------------------------------------------------------------------

const NavItem = forwardRef(({ item, depth, open, active, isExternalLink, ...other }, ref) => {
  const { t } = useLocales();

  const {
    title,
    sub_title,
    path,
    // icon,
    info,
    menus,
    disabled,
    caption,
    roles,
  } = item;

  const subItem = depth !== 1;

  const renderContent = useMemo(
    () => (
      <StyledItem
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
        {...other}
      >
        {!path && <StyledIcon>{ICONS.user}</StyledIcon>}

        <ListItemText
          primary={`${t(sub_title || title)}`}
          primaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: active ? 'subtitle2' : 'body2',
          }}
        />

        {info && (
          <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
            {info}
          </Box>
        )}

        {caption && (
          <Tooltip title={`${t(caption)}`} arrow>
            <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
              <Iconify icon="eva:info-outline" width={16} />
            </Box>
          </Tooltip>
        )}

        {!!menus && (
          <Iconify
            icon={subItem ? 'eva:chevron-right-fill' : 'eva:chevron-down-fill'}
            width={16}
            sx={{ ml: 0.5, flexShrink: 0 }}
          />
        )}
      </StyledItem>
    ),
    [
      active,
      caption,
      depth,
      disabled,
      info,
      menus,
      open,
      other,
      path,
      ref,
      subItem,
      sub_title,
      t,
      title,
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
});

NavItem.propTypes = {
  open: PropTypes.bool,
  active: PropTypes.bool,
  item: PropTypes.object,
  depth: PropTypes.number,
  isExternalLink: PropTypes.bool,
};

export default memo(NavItem);
