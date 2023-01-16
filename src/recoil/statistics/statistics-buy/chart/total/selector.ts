import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyTotalSelector = selector({
  key: 'statisticsBuyTotalSelector',
  get: ({ get }) => {
    const { data } = get(statisticsBuySelector);
    const totalPrice = data.map((v) => v.total_price);
    const totalCount = data.map((v) => v.total_count);
    const totalCancelPrice = data.map((v) => v.total_cancel_price);
    const totalCancelCount = data.map((v) => v.total_cancel_count);

    return {
      totalPrice,
      totalCount,
      totalCancelPrice,
      totalCancelCount,
    };
  },
});
