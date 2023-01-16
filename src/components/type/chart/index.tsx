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
  ChartData,
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

interface IChartData {
  labels: any;
  datasets: {
    type: string;
    label: string;
    data: any;
    borderWidth: number;
  }[];
}

interface IChartComponent {
  data: IChartData;
  title: string;
  subTitle: string;
}

function ChartComponent({ data, title, subTitle }: IChartComponent) {
  const { t } = useLocales();
  return (
    <Card sx={{ padding: '5px 15px' }}>
      <CardHeader title={t(title)} subheader={t(subTitle)} />
      <Chart type="bar" data={data as ChartData<any>} />
    </Card>
  );
}

export default ChartComponent;
