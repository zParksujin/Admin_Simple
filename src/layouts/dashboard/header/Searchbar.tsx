// @ts-nocheck
import { useState, memo, useEffect, useMemo } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useNavigate, useLocation } from 'react-router-dom';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  Slide,
  Popper,
  InputBase,
  InputAdornment,
  ClickAwayListener,
  Autocomplete,
  IconButton,
} from '@mui/material';
// utils
import { useRecoilValue } from 'recoil';
import { bgBlur } from '../../../utils/cssStyles';
import flattenArray from '../../../utils/flattenArray';
// components
import Iconify from '../../../components/iconify';
import SearchNotFound from '../../../components/search-not-found';
//
import { menuSelector } from '@/recoil/menu';
import { ROOTS_DASHBOARD } from '@/routes/paths';
import { IMyMenuItem } from '@/api/menu/type';

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: (theme as any).customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const StyledPopper = styled((props) => <Popper {...props} />)(({ theme }) => ({
  left: `8px !important`,
  top: `${APPBAR_MOBILE + 8}px !important`,
  width: 'calc(100% - 16px) !important',
  transform: 'none !important',
  [theme.breakpoints.up('md')]: {
    top: `${APPBAR_DESKTOP + 8}px !important`,
  },
  '& .MuiAutocomplete-paper': {
    padding: theme.spacing(1, 0),
  },
  '& .MuiListSubheader-root': {
    '&.MuiAutocomplete-groupLabel': {
      ...bgBlur({ color: (theme.palette.background as any).neutral }),
      ...theme.typography.overline,
      top: 0,
      margin: 0,
      lineHeight: '48px',
      borderRadius: theme.shape.borderRadius,
    },
  },
  '& .MuiAutocomplete-listbox': {
    '& .MuiAutocomplete-option': {
      padding: theme.spacing(0.5, 2),
      margin: 0,
      display: 'block',
      border: `dashed 1px transparent`,
      borderBottomColor: theme.palette.divider,
      '&:last-of-type': {
        borderBottomColor: 'transparent',
      },
      '&:hover': {
        borderColor: theme.palette.primary.main,
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      },
    },
  },
}));

function Searchbar() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const { data } = useRecoilValue(menuSelector);

  const reduceItems = Object.keys(data).flatMap((item: string) => handleLoop(data[item]));

  const allItems = useMemo(
    () =>
      flattenArray({ list: reduceItems }).map(
        (option: { sub_title: string; title: string; path: string }) => {
          const group = splitPath(reduceItems, option.path);

          if (option.path?.includes('[0-9]+')) {
            return null;
          }

          return {
            group: group && group.length > 1 ? group[0] : option?.sub_title || option.title,
            rootGroup: option?.title.trim(),
            title: option?.sub_title || option.title,
            path: ROOTS_DASHBOARD + option.path,
            indexKey: 'minimal',
          };
        }
      ),
    [reduceItems]
  );

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (path: string) => {
    if (path.includes('http')) {
      window.open(path);
    } else {
      navigate(path);
    }
    handleClose();
  };

  const handleKeyUp = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleClick(searchQuery);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" />
          </IconButton>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Autocomplete
              sx={{ width: 1, height: 1 }}
              autoHighlight
              disablePortal
              disableClearable
              popupIcon={null}
              PopperComponent={StyledPopper}
              onInputChange={(event, value) => setSearchQuery(value)}
              noOptionsText={<SearchNotFound query={searchQuery} sx={{ py: 10 }} />}
              options={allItems
                .filter((item: null) => item !== null)
                .sort(
                  (a: { menu_idx: number }, b: { menu_idx: number }) => a.menu_idx - b.menu_idx
                )}
              groupBy={(option: {
                rootGroup: string;
                title: string;
                path: string;
                indexKey: string;
              }) => option.rootGroup}
              getOptionLabel={(option) => `${option.title} ${option.path} ${option.indexKey}`}
              renderInput={(params) => (
                <InputBase
                  {...params.InputProps}
                  inputProps={params.inputProps}
                  fullWidth
                  autoFocus
                  placeholder="Search..."
                  onKeyUp={handleKeyUp}
                  startAdornment={
                    <InputAdornment position="start">
                      <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
                    </InputAdornment>
                  }
                  sx={{ height: 1, typography: 'h6' }}
                />
              )}
              renderOption={(props, option, { inputValue }) => {
                const { title, path } = option;

                const partsTitle = parse(title, match(title, inputValue));

                const partsPath = parse(path, match(path, inputValue));

                return (
                  <Box component="li" {...props} onClick={() => handleClick(path)}>
                    <div>
                      {partsTitle.map(
                        (part: { highlight: string; text: string }, index: string) => (
                          <Box
                            key={index}
                            component="span"
                            sx={{
                              typography: 'subtitle2',
                              textTransform: 'capitalize',
                              color: part.highlight ? 'primary.main' : 'text.primary',
                            }}
                          >
                            {part.text}
                          </Box>
                        )
                      )}
                    </div>

                    <div>
                      {partsPath.map((part: { highlight: string; text: string }, index: string) => (
                        <Box
                          key={index}
                          component="span"
                          sx={{
                            typography: 'caption',
                            color: part.highlight ? 'primary.main' : 'text.secondary',
                          }}
                        >
                          {part.text}
                        </Box>
                      ))}
                    </div>
                  </Box>
                );
              }}
            />
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}

export default memo(Searchbar);

// ----------------------------------------------------------------------

function splitPath(array: any[], key: string) {
  let stack: { path: string; currItem: any }[] | any = array.map((item) => ({
    path: [item.title],
    currItem: item,
  }));

  while (stack.length) {
    const stackItem = stack.pop() as {
      path: string;
      currItem: any;
    };

    if (stackItem.currItem.path === key) {
      return stackItem.path;
    }

    if (stackItem.currItem.menus?.length) {
      stack = stack.concat(
        // eslint-disable-next-line no-loop-func
        stackItem.currItem.menus.map((item: any) => ({
          path: stackItem.path.concat(item.title),
          currItem: item,
        }))
      );
    }
  }
  return null;
}

// ----------------------------------------------------------------------

function handleLoop(array: IMyMenuItem[], title = '') {
  return (array as any)?.menus?.map((list: any) => ({
    title,
    ...list,
    ...(list.menus && {
      menus: handleLoop(list.menus, title),
    }),
  }));
}
