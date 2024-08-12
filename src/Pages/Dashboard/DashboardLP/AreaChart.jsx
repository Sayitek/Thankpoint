import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return `${value}%`; // Add '%' sign to each tick
          },
          stepSize: 20, // Define the step size to 20%
        },
        max: 100, // Maximum value of the y-axis
        min: 20, // Minimum value of the y-axis
      },
    },
    plugins: {
      // Add your plugin configuration here if needed
    },
  };

const labels = ['5k', '10K', '15K', '20K', '25K', '30K', '35K','40k', '45K', '50K', '55K', '60K', '65K'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Revenue',
      data: [65, 59, 80, 81, 56, 55, 40,20,56,78,45,31,78,23,65,71],
      borderColor: 'rgba(255, 28, 28, 1)',
      backgroundColor: 'rgba(255, 28, 28, 0.16)',
    },
  ],
};
export default function AreaChart({ height }) {
    return <Line options={options} data={data} height={height} />;
  }
