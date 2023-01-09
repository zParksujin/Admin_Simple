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
  return (
    <Card sx={{ padding: '5px 15px'}}>
      <CardHeader
      title={title}
      subheader={subTitle}
       />
      <Chart type="bar" data={data} />
    </Card>
  );
}

export default ChartComponent;
