import instance, { IApiDataResult, IApiResult } from '@/api';
import {
  IAdminLoginInfo,
  IAdminLoginParam,
  IAdminLoginToken,
  IAdminUserItem,
  IMyIpInfo,
} from './type';

export const adminLogin = async (body: IAdminLoginParam) => {
  const res = <IApiDataResult<IAdminLoginInfo>>await instance.post('/v1/admins/login', {
    _checkToken: true,
    ...body,
  });

  return res;
};

export const checkRefreshToken = async (token: string) => {
  const res = <IApiDataResult<IAdminLoginToken>>await instance.post('/v1/admins/refresh_token', {
    refresh_token: token,
    _checkToken: true,
  });
  return res;
};

export const getAdminMe = async () => {
  const res = <IApiDataResult<IAdminUserItem>>await instance.get('/v1/admins/me');
  return res;
};

export const myIpCheck = async () => {
  const res = <IApiDataResult<IMyIpInfo>>await instance.get('/v1/admins/my-ip');
  return res;
};

export const adminLogout = async () => {
  const res = <IApiResult>await instance.post('/v1/admins/logout', { _checkToken: true });
  return res;
};
