import { selector } from 'recoil';
import { statisticsBuySelector } from '@/recoil/statistics/statistics-buy';

export const statisticsBuyPayPostSelector = selector({
  key: 'statisticsBuyPayPostSelector',
  get: ({ get }) => {
    const { data } = get(statisticsBuySelector);
    const paypostPrice = data.map((v) => v.paypost_price);
    const paypostCount = data.map((v) => v.paypost_count);
    const paypostCancelPrice = data.map((v) => v.paypost_cancel_price);
    const paypostCancelCount = data.map((v) => v.paypost_cancel_count);

    return { paypostPrice, paypostCount, paypostCancelPrice, paypostCancelCount };
  },
});
