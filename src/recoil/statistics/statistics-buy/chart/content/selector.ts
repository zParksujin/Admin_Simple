import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyContentSelector = selector({
  key: 'statisticsBuyContentSelector',
  get: ({ get }) => {
    const { data } = get(statisticsBuySelector);
    const contentPrice = data.map((v) => v.content_price);
    const contentCount = data.map((v) => v.content_count);
    const contentCancelPrice = data.map((v) => v.content_cancel_price);
    const contentCancelCount = data.map((v) => v.content_cancel_count);

    return { contentPrice, contentCount, contentCancelPrice, contentCancelCount };
  },
});
