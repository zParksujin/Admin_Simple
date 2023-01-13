import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
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

const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('admin_access_token');
  // console.log('request', token, config);

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  // if (typeof config?.metadata !== 'undefined') {
  //   config?.metadata = { startTime: new Date() };
  // }

  return config;
});

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // const duration = +new Date() - +(res?.config?.metadata?.startTime || 0);

    return {
      ...res,
      // duration,
    };
  },
  async (err: AxiosError) => {
    if (err.response === undefined) {
      return Promise.reject(err);
    }
    const accessToekn = localStorage.getItem('admin_access_token');
    const refreshToekn = localStorage.getItem('admin_refresh_token');
    const originalRequest = err?.config;
    // 토큰 만료 시 갱신
    if (originalRequest && err?.response?.status === 401 && accessToekn && refreshToekn) {
      const _token = await checkRefreshToken(refreshToekn);
      if (typeof _token?.status === 'number' && _token?.status === 200) {
        const { data } = setToken(_token.data);
        originalRequest.headers = {
          Authorization: `Bearer ${data?.access_token}`,
        };
        localStorage.setItem('admin_access_token', data?.access_token);
        localStorage.setItem('admin_refresh_token', data?.refresh_token);
        return axios.request(originalRequest);
      }
      clearSession();
    }

    return Promise.reject(err);
  }
);

export interface IListPage {
  offset: number;
  limit: number;
  total: number;
  page?: number;
  lastPage?: number;
}

export interface IApiResult {
  status: boolean;
  message: string;
}

export interface IApiDataResult<T> extends IApiResult {
  data: T;
}
export interface IApiListResult<T> extends IApiResult {
  data: T[];
  total_count: number;
  page: IListPage;
}

export interface IApiListParam {
  offset: number;
  limit: number;
  sort?: string;
  date_type?: string;
  start_date?: string;
  end_date?: string;
}

// eslint-disable-next-line
export const getSearchParam = (body: Record<string, any>): string => {
  const searchParams = new URLSearchParams(body);

  return searchParams.toString();
};

export default instance;
