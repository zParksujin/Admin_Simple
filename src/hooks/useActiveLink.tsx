import { useLocation, matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

export default function useActiveLink(path: string, deep = true) {
  const { pathname } = useLocation();

  const normalActive = path ? !!matchPath({ path, end: true }, pathname) : false;

  const deepActive = path ? !!matchPath({ path, end: false }, pathname) : false;

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: false,
    // isExternalLink: path.includes('http'),
  };
}
