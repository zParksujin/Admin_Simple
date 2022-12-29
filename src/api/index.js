import axios from 'axios';
import { checkRefreshToken } from '@/api/auth';
import setToken from '@/utils/auth/setToken';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://dev-adminapi.fancoo.com'
    : 'https://adminapi.fancoo.com';

// eslint-disable-next-line no-unused-vars
export const clearSession = () => {
  sessionStorage.removeItem('admin_access_token');
  sessionStorage.removeItem('admin_refresh_token');
  window.sessionStorage.clear();
  window.localStorage.removeItem('recoil-persist');

  window.location.href = '/login';
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

instance.interceptors.response.use(
  (res) => {
    console.log(res);
    console.log('[fetch response]', res?.response?.status /* ,  res.response */);
    // eslint-disable-next-line no-unsafe-optional-chaining
    const duration = new Date() - res?.config?.metadata?.startTime;
    return {
      ...res,
      duration,
    };
  },
  async (err) => {
    console.log('err:', err);
    const accessToekn = localStorage.getItem('admin_access_token');
    const refreshToekn = localStorage.getItem('admin_refresh_token');
    const originalRequest = err?.config;
    // 토큰 만료 시 갱신
    if (
      // !_checkToken &&
      originalRequest &&
      err?.response?.status === 401 &&
      accessToekn &&
      refreshToekn
    ) {
      const _token = await checkRefreshToken(refreshToekn);
      if (_token.status === 200) {
        const data = setToken(_token.data);
        originalRequest.headers.Authorization = `Bearer ${data?.token?.access_token}`;
        return axios.request(originalRequest);
      }
    }
    // nuxtApp.$userStore.logout();
    clearSession();

    return Promise.reject(err);
  }
  // data._headers = ctx.response?.headers;
);

export default instance;
