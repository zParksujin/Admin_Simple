import axios from 'axios';
import { checkRefreshToken } from '@/api/auth';
import setToken from '@/utils/auth/setToken';
import { PATH_AUTH } from '@/routes/paths';

export const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://dev-adminapi.fancoo.com'
    : 'https://dev-adminapi.fancoo.com';
// : 'https://adminapi.fancoo.com';

// eslint-disable-next-line no-unused-vars
export const clearSession = () => {
  localStorage.removeItem('admin_access_token');
  localStorage.removeItem('admin_refresh_token');
  window.sessionStorage.clear();
  window.localStorage.removeItem('recoil-persist');

  window.location.href = PATH_AUTH.login;
};

const instance = axios.create({
  withCredentials: true,
  baseURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_access_token');
  // console.log('request', token, config);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.metadata = { startTime: new Date() };
  return config;
});

instance.interceptors.response.use(
  (res) => {
    const duration = new Date() - +(res?.config?.metadata?.startTime || 0);

    return {
      ...res,
      duration,
    };
  },
  async (err) => {
    console.log('err:', err);
    if (err?.response === undefined) {
      return Promise.reject(err);
    }
    const accessToekn = localStorage.getItem('admin_access_token');
    const refreshToekn = localStorage.getItem('admin_refresh_token');
    const originalRequest = err?.config;
    // 토큰 만료 시 갱신
    if (originalRequest && err?.response?.status === 401 && accessToekn && refreshToekn) {
      const _token = await checkRefreshToken(refreshToekn);
      console.log(_token);
      alert('0');
      if (_token.status === 200) {
        const { data } = setToken(_token.data);
        console.log(data);
        console.log(data?.access_token);
        console.log(data?.refresh_token);
        alert('1');
        originalRequest.headers.Authorization = `Bearer ${data?.access_token}`;
        localStorage.setItem('admin_access_token', data?.access_token);
        localStorage.setItem('admin_refresh_token', data?.refresh_token);
        console.log(localStorage.getItem('admin_access_token'));
        console.log(localStorage.getItem('admin_refresh_token'));
        alert('2');
        return axios.request(originalRequest);
      }
    }
    try {
      await axios.post('/v1/admins/logout', { _checkToken: true });
    } catch (error) {
      console.log(error);
    }

    clearSession();

    return Promise.reject(err);
  }
);

export const getSearchParam = (body) => {
  const searchParams = new URLSearchParams(body);

  return searchParams.toString();
};

export default instance;
