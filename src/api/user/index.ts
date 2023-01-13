import instance, { IApiListResult } from '..';
import { IGetUserListParam, IUserItem } from './type';

export const getUserList = async (body: IGetUserListParam) => {
  const res = <IApiListResult<IUserItem>>await instance.get('/v1/admins/user', { params: body });
  return res;
};
