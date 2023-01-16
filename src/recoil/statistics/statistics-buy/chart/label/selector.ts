import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyLabelSelector = selector({
  key: 'statisticsBuyLabelSelector',
  get: ({ get }) => {
    const { data } = get(statisticsBuySelector);
    const label = data.map((v) => v.buy_date);
    return label;
  },
});
