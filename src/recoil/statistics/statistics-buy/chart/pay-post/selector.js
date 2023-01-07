import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyPayPostSelector = selector({
  key: 'statisticsBuyPayPostSelector',
  get: ({ get }) => {
    const buyList = get(statisticsBuySelector);
    const paypostPrice = buyList.map((v) => v.paypost_price);
    const paypostCount = buyList.map((v) => v.paypost_count);
    const paypostCancelPrice = buyList.map((v) => v.paypost_cancel_price);
    const paypostCancelCount = buyList.map((v) => v.paypost_cancel_count);

    return { paypostPrice, paypostCount, paypostCancelPrice, paypostCancelCount };
  },
});
