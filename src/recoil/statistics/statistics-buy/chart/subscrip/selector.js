import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuySubSelector = selector({
  key: 'statisticsBuySubSelector',
  get: ({ get }) => {
    const buyList = get(statisticsBuySelector);
    const subscPrice = buyList.map((v) => v.subsc_price);
    const subscCount = buyList.map((v) => v.subsc_count);
    const subscCancelPrice = buyList.map((v) => v.subsc_cancel_price);
    const subscCancelCount = buyList.map((v) => v.subsc_cancel_count);

    return {
      subscPrice,
      subscCount,
      subscCancelPrice,
      subscCancelCount,
    };
  },
});
