import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyLabelSelector = selector({
  key: 'statisticsBuyLabelSelector',
  get: ({ get }) => {
    const buyList = get(statisticsBuySelector);
    const label = buyList.map((v) => v.buy_date);
    return label;
  },
});
