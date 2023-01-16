// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

export const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: '/login',
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  main: path(ROOTS_DASHBOARD, '/main'),
  user: path(ROOTS_DASHBOARD, '/user'),
  // user: {
  //   list: path(ROOTS_DASHBOARD, '/user/list'),
  //   detail: path(ROOTS_DASHBOARD, '/user/detail'),
  // },
};
