import { selector } from 'recoil';
import statisticsBuyParamAtom from '.';

export const statisticsBuyParam = selector({
  key: 'statisticsBuyParam',
  get: ({ get }) => get(statisticsBuyParamAtom),
  set: ({ get, set }, param) => {
    const paramOrigin = get(statisticsBuyParamAtom);
    set(statisticsBuyParamAtom, { ...paramOrigin, ...param });
  },
});
