import React from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { useRecoilValue } from 'recoil';
import { statisticsBuyContentSelector } from '@/recoil/statistics/statistics-buy/chart/content/selector';
import { statisticsBuyPayPostSelector } from '@/recoil/statistics/statistics-buy/chart/pay-post/selector';
import { statisticsBuySubSelector } from '@/recoil/statistics/statistics-buy/chart/subscrip/selector';
import { statisticsBuySponSelector } from '@/recoil/statistics/statistics-buy/chart/spon/selector';
import { statisticsBuyTotalSelector } from '@/recoil/statistics/statistics-buy/chart/total/selector';
import { statisticsBuyLabelSelector } from '@/recoil/statistics/statistics-buy/chart/label/selector';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//   export const data = {
//     labels,
//     datasets: [
//       {
//         type: 'line',
//         label: 'Dataset 1',
//         borderColor: 'rgb(255, 99, 132)',
//         borderWidth: 2,
//         fill: false,
//         data: labels.map(() => 1000),
//       },
//       {
//         type: 'bar',
//         label: 'Dataset 2',
//         backgroundColor: 'rgb(75, 192, 192)',
//         data: labels.map(() => 1000),
//         borderColor: 'white',
//         borderWidth: 2,
//       },
//       {
//         type: 'bar',
//         label: 'Dataset 3',
//         backgroundColor: 'rgb(53, 162, 235)',
//         data: labels.map(() => 1000),
//       },
//     ],
//   };
function ChartComponent() {
  const labels = useRecoilValue(statisticsBuyLabelSelector);
  const content = useRecoilValue(statisticsBuyContentSelector);
  const paypost = useRecoilValue(statisticsBuyPayPostSelector);
  const sub = useRecoilValue(statisticsBuySubSelector);
  const spon = useRecoilValue(statisticsBuySponSelector);
  const total = useRecoilValue(statisticsBuyTotalSelector);
  // const statisticsList = useRecoilValue(statisticsBuySelector);

  console.log('labels', labels);
  console.log('total',total);
  const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'total_price',
            data: total.totalPrice,
            backgroundColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'total_count',
            data: total.totalCount,
            backgroundColor: 'rgb(75, 192, 112)',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'total_cancel_price',
            data: total.totalCancelPrice,
            backgroundColor: 'rgb(192, 186, 75)',
            borderWidth: 2,
          },
          {
            type: 'bar',
            label: 'total_cancel_count',
            data: total.totalCancelCount,
            backgroundColor: 'rgb(192, 75, 75)',
            borderWidth: 2,
          },
    ],
  };
  console.log(labels, content, paypost, sub, spon, total);
  return <Chart type="bar" data={data} />;
}

export default ChartComponent;
