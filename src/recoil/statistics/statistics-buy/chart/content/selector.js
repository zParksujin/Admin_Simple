import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyContentSelector = selector({
  key: 'statisticsBuyContentSelector',
  get: ({ get }) => {
    const buyList = get(statisticsBuySelector);
    const contentPrice = buyList.map((v) => v.content_price);
    const contentCount = buyList.map((v) => v.content_count);
    const contentCancelPrice = buyList.map((v) => v.content_cancelPrice);
    const contentCancelCount = buyList.map((v) => v.content_cancel_count);

    return { contentPrice, contentCount, contentCancelPrice, contentCancelCount };
  },
});
