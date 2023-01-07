import instance from '.';

export const getStatisticsBuyDayList = async (params) => {
  const res = await instance.get('/v1/admins/statistics/buy_day', { params });
  return res;
};
