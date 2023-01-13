import instance, { IApiDataResult } from '@/api';
import { IBuyStatDayItem, IGetBuyStatDayParam } from './type';

export const getStatisticsBuyDayList = async (params: IGetBuyStatDayParam) => {
  const res = <IApiDataResult<IBuyStatDayItem[]>>(
    await instance.get('/v1/admins/statistics/buy_day', { params })
  );
  return res;
};
