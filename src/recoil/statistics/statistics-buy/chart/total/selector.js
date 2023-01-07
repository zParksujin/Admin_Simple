import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyTotalSelector = selector({
  key: 'statisticsBuyTotalSelector',
  get: ({ get }) => {
    const buyList = get(statisticsBuySelector);
    const totalPrice = buyList.map((v) => v.total_price);
    const totalCount = buyList.map((v) => v.total_count);
    const totalCancelPrice = buyList.map((v) => v.total_cancel_price);
    const totalCancelCount = buyList.map((v) => v.total_cancel_count);

    return {
      totalPrice,
      totalCount,
      totalCancelPrice,
      totalCancelCount,
    };
  },
});
