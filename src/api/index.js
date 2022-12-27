import axios from 'axios';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://dev-adminapi.fancoo.com'
    : 'https://adminapi.fancoo.com';

// eslint-disable-next-line no-unused-vars
const clearSession = () => {
  sessionStorage.removeItem('admin_access_token');
  sessionStorage.removeItem('admin_refresh_token');
  window.sessionStorage.clear();
  window.localStorage.removeItem('recoil-persist');

  window.location.href = '/';
};

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

instance.interceptors.request.use((config) => {
  // const token = Cookies.get(ACCESS_TOKEN);
  const token = sessionStorage.getItem('admin_access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.metadata = { startTime: new Date() };
  return config;
});

instance.interceptors.response.use((res) => {
  const duration = new Date() - res.config.metadata.startTime;
  return {
    ...res,
    duration,
  };
});

export default instance;
