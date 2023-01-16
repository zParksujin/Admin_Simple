import instance, { getSearchParam, IApiDataResult, IApiListResult, IApiResult } from '@/api';
import {
  IAddBlockUserParam,
  IBlockCategoryCodeItem,
  IBlockContentItem,
  IContentMessageItem,
  IGetContentMessageListParam,
} from './type';

export const getContentList = async (params: IGetContentMessageListParam) => {
  const res = <IApiListResult<IContentMessageItem>>(
    await instance.get('/v1/admins/content_message', { params })
  );
  return res;
};

export const getBlockCategoryCode = async () => {
  const res = <IApiDataResult<Record<string, string>>>(
    await instance.get('/v1/admins/block_category/code')
  );
  return res;
};

export const getBlockCategoryDetailCode = async (code: string) => {
  const res = <IApiDataResult<IBlockCategoryCodeItem[]>>(
    await instance.get(`/v1/admins/block_category/code/${code}`)
  );
  return res;
};

export const getBlockContentInfo = async (message_idx: number) => {
  const res = <IApiDataResult<IBlockContentItem>>(
    await instance.get('/v1/admins/block/content/info', { params: { message_idx } })
  );
  return res;
};

export const setBlockContent = async (body: IAddBlockUserParam) => {
  const params = getSearchParam(body);
  const res = <IApiResult>await instance.post('/v1/admins/block/user/add', params);
  return res;
};
