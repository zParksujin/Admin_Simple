import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuySponSelector = selector({
  key: 'statisticsBuySponSelector',
  get: ({ get }) => {
    const { data } = get(statisticsBuySelector);
    const sponPrice = data.map((v) => v.spon_price);
    const sponCount = data.map((v) => v.spon_count);
    const sponCancelPrice = data.map((v) => v.spon_cancel_price);
    const sponCancelCount = data.map((v) => v.spon_cancel_count);

    return { sponPrice, sponCount, sponCancelPrice, sponCancelCount };
  },
});
