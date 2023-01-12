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
  Colors,
} from 'chart.js';
import { Card, CardHeader } from '@mui/material';
import { useLocales } from '@/locales';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  Colors
);

function ChartComponent({ data, title, subTitle }) {
  const { t } = useLocales()
  return (
    <Card sx={{ padding: '5px 15px'}}>
      <CardHeader
      title={t(title)}
      subheader={t(subTitle)}
       />
      <Chart type="bar" data={data} />
    </Card>
  );
}

export default ChartComponent;
