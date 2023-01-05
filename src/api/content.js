import instance from '.';

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
