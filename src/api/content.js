import instance, { getSearchParam } from '.';

export const getContentList = async (params) => {
  const res = await instance.get('/v1/admins/content_message', { params });
  return res;
};

export const getBlockCategoryCode = async (params) => {
  const res = await instance.get('/v1/admins/block_category/code', { params });
  return res;
};

export const getBlockCategoryDetailCode = async (code) => {
  const res = await instance.get(`/v1/admins/block_category/code/${code}`);
  return res;
};

export const getBlockContentInfo = async (message_idx) => {
  const res = await instance.get('/v1/admins/block/content/info', { params: { message_idx } });
  console.log('axi', res);
  return res;
};

export const setBlockContent = async (body) => {
  const params = getSearchParam(body);
  console.log('params', params);
  const res = await instance.post('/v1/admins/block/user/add', params);
  return res;
};
