import instance, { IApiDataResult } from '@/api';
import { IMyMenuItem } from './type';

export const getMyMenu = async () => {
  const res = <IApiDataResult<IMyMenuItem[]>>await instance.get('/v1/admins/my-menu');
  return res;
};
