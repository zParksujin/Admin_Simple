import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuySubSelector = selector({
  key: 'statisticsBuySubSelector',
  get: ({ get }) => {
    const { data } = get(statisticsBuySelector);
    const subscPrice = data.map((v) => v.subsc_price);
    const subscCount = data.map((v) => v.subsc_count);
    const subscCancelPrice = data.map((v) => v.subsc_cancel_price);
    const subscCancelCount = data.map((v) => v.subsc_cancel_count);

    return {
      subscPrice,
      subscCount,
      subscCancelPrice,
      subscCancelCount,
    };
  },
});
