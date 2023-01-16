import { selector } from 'recoil';
import { getStatisticsBuyDayList } from '@/api/statistics';

import statisticsBuyParamAtom from './parmas';

const statisticsBuySelector = selector({
  key: 'statisticsBuySelector',
  get: async ({ get }) => {
    const param = get(statisticsBuyParamAtom);
    const res = await getStatisticsBuyDayList(param);
    if (res.error) {
      throw res.error;
    }
    return res;
  },
});

export default statisticsBuySelector;
