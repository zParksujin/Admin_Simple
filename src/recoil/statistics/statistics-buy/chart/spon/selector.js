import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuySponSelector = selector({
  key: 'statisticsBuySponSelector',
  get: ({ get }) => {
    const buyList = get(statisticsBuySelector);
    const sponPrice = buyList.map((v) => v.spon_price);
    const sponCount = buyList.map((v) => v.spon_count);
    const sponCancelPrice = buyList.map((v) => v.spon_cancel_price);
    const sponCancelCount = buyList.map((v) => v.spon_cancel_count);

    return { sponPrice, sponCount, sponCancelPrice, sponCancelCount };
  },
});
