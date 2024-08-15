import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import styled from 'styled-components';

// Register the necessary components with Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Styled component for the chart container
const ChartContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Data for the chart
const data = {
  labels: ['MongoDB', 'Express', 'React', 'Node.js'],
  datasets: [
    {
      label: 'Proficiency',
      data: [80, 70, 90, 85], // Your proficiency levels (0-100 scale)
      backgroundColor: ['#4DB6AC', '#FF7043', '#64B5F6', '#FFD54F'],
      borderRadius: 8,
      barPercentage: 0.8,
      categoryPercentage: 0.8,
    },
  ],
};

// Options for the chart
const options = {
  animation: {
    duration: 1500, // Animation duration
    easing: 'easeOutBounce', // Animation easing
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        borderDash: [5, 5],
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return `${context.label}: ${context.raw}%`;
        },
      },
    },
  },
};

const SkillsChart = () => {
  return (
    <ChartContainer>
      <h2>MERN Stack Proficiency</h2>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
}

export default SkillsChart;
