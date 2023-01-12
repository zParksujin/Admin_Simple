import { atom, selector } from 'recoil';
import i18next from 'i18next';
import { statisticsBuyContentSelector } from '../content/selector';
import { statisticsBuyLabelSelector } from '../label/selector';
import { statisticsBuyPayPostSelector } from '../pay-post/selector';
import { statisticsBuySponSelector } from '../spon/selector';
import { statisticsBuySubSelector } from '../subscrip/selector';
import { statisticsBuyTotalSelector } from '../total/selector';

export const statisticsBuyToggleAtom = atom({
  key: 'statisticsBuyToggleAtom',
  default: 'total',
});

// 컴포넌트에 작성 될 비즈니스 로직들을 selector로 분리하여
// 컴포넌트에서는 getter만을 사용하여 필요한 값을 가져오게 된다.
export const statisticsBuyDatasetsSelector = selector({
  key: 'statisticsBuyDatasetsSelector',
  get: ({ get }) => {
    const datasets = [];
    const labels = get(statisticsBuyLabelSelector);
    const content = get(statisticsBuyContentSelector);
    const payPost = get(statisticsBuyPayPostSelector);
    const sub = get(statisticsBuySubSelector);
    const spon = get(statisticsBuySponSelector);
    const total = get(statisticsBuyTotalSelector);
    const compareObj = {
      content,
      payPost,
      sub,
      spon,
      total,
    };
    const toggle = get(statisticsBuyToggleAtom);

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const key in compareObj[toggle]) {
      datasets.push({
        type: 'bar',
        label: i18next.t(`common.chart.${key}`),
        data: compareObj[toggle][key],
        borderWidth: 2,
      });
    }

    return {
      labels,
      datasets,
    };
  },
});
