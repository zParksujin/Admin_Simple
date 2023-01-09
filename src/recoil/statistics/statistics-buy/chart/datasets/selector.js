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

export const statisticsBuyToggleSelector = selector({
  key: 'statisticsBuyToggleSelector',
  get: ({ get }) => get(statisticsBuyToggleAtom),
  set: ({ get, set }, value) => {
    set(statisticsBuyToggleAtom, value);
  },
});

export const statisticsBuyDatasetsSelector = selector({
  key: 'statisticsBuyDatasetsSelector',
  get: ({ get }) => {
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

    const datasets = [];
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

    // const toggleList = get(statisticsBuyToggleAtom);
    // console.log(toggleList, compareObj);

    // // eslint-disable-next-line no-restricted-syntax
    // for (const item of toggleList) {
    //   // eslint-disable-next-line no-restricted-syntax, guard-for-in
    //   for (const key in compareObj[item]) {
    //     datasets.push({
    //       type: 'bar',
    //       label: key,
    //       data: compareObj[item][key],
    //       backgroundColor: getRandomRGB(),
    //       borderWidth: 2,
    //     });
    //   }
    // }
    // const resultObj = {
    //   labels,
    //   datasets,
    // };
    // console.log(resultObj);
    return {
      labels,
      datasets,
    };
  },
});
