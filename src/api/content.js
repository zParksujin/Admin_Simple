import instance from '.';

export const getContentList = async (body) => {
  const res = await instance.get('/v1/admins/content_message', { params: body });
  return res;
};
