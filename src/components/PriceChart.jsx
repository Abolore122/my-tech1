import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const PriceChart = ({ data }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const labels = data.map((point) => point.date);
    const prices = data.map((point) => point.price);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Price Trend',
          data: prices,
          borderColor: 'blue',
          backgroundColor: 'rgba(10, 70, 182, 0.5)',
          fill: true,
        },
      ],
    });
  }, [data]);

  return <Line data={chartData} />;
};

export default PriceChart;
