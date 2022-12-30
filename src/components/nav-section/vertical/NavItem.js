import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Tooltip, Link, ListItemText } from '@mui/material';
// locales
import { memo, useMemo } from 'react';
import { useLocales } from '@/locales';
// auth
import RoleBasedGuard from '../../../auth/RoleBasedGuard';
//
import Iconify from '../../iconify';
//
import { StyledItem, StyledIcon, StyledDotIcon } from './styles';

// ----------------------------------------------------------------------

NavItem.propTypes = {
  open: PropTypes.bool,
  active: PropTypes.bool,
  item: PropTypes.object,
  depth: PropTypes.number,
  isExternalLink: PropTypes.bool,
};

function NavItem({ item, depth, open, active, isExternalLink, ...other }) {
  const { t } = useLocales();

  const { title, sub_title, path, icon, info, menus, disabled, caption, roles } = item;

  const subItem = depth !== 1;

  const renderContent = useMemo(
    () => (
      <StyledItem depth={depth} active={active} disabled={disabled} caption={!!caption} {...other}>
        {icon && <StyledIcon>{icon}</StyledIcon>}

        {subItem && (
          <StyledIcon>
            <StyledDotIcon active={active && subItem} />
          </StyledIcon>
        )}

        <ListItemText
          primary={`${t(sub_title || title)}`}
          secondary={
            caption && (
              <Tooltip title={`${t(caption)}`} placement="top-start">
                <span>{`${t(caption)}`}</span>
              </Tooltip>
            )
          }
          primaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: active ? 'subtitle2' : 'body2',
          }}
          secondaryTypographyProps={{
            noWrap: true,
            variant: 'caption',
          }}
        />

        {info && (
          <Box component="span" sx={{ lineHeight: 0 }}>
            {info}
          </Box>
        )}

        {!!menus && (
          <Iconify
            width={16}
            icon={open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ ml: 1, flexShrink: 0 }}
          />
        )}
      </StyledItem>
    ),
    [active, caption, depth, disabled, icon, info, menus, open, other, subItem, sub_title, t, title]
  );

  const renderItem = () => {
    // ExternalLink
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );

    // Has child
    if (menus) {
      return renderContent;
    }

    // Default
    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return <RoleBasedGuard roles={roles}> {renderItem()} </RoleBasedGuard>;
}

export default memo(NavItem);
