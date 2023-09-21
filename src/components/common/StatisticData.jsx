import { Box, Stack, Typography, colors } from "@mui/material";
import React from "react";
import MPaper from "./MPaper";
import { Bar } from "react-chartjs-2";

const ChartData = {
  labels: [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ],
  datasets: [
    {
      label: "Sold",
      data: [100, 90, 21, 90, 25, 91, 100, 90, 21, 90, 25, 91],
      stack: "stack 0",
      backgroundColor: colors.green[600],
      barPercentage: 0.6,
      categoryPercentage: 0.7,
    },
    {
      label: "Canceled",
      data: [30, 10, 8, 40, 10, 9, 30, 10, 8, 40, 10, 9],
      stack: "stack 1",
      backgroundColor: colors.red[300],
      barPercentage: 0.6,
      categoryPercentage: 0.7,
    },
  ],
};

const chartOptions = {
  response: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: { display: false },
      stacked: true,
    },
    y: { stacked: true },
  },
  plugins: {
    legend: { display: false },
    title: { display: false },
  },
  elements: {
    bar: {
      borderRadius: 10,
    },
  },
};

const StatisticData = () => {
  return (
    <MPaper title="Statistic">
      <Stack spacing={4}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body2">
            (+40% sold | +12% canceled) than last year
          </Typography>
          <Stack direction="row" spacing={3} alignItems="center">
            {ChartData.datasets.map((data, index) => (
              <Stack key={index} direction="row" alignItems="center">
                <Box
                  sx={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "4px",
                    bgcolor: data.backgroundColor,
                    mr: 1,
                  }}
                />
                <Typography variant="subtitle2">{data.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Box>
          <Bar options={chartOptions} data={ChartData} height="300px" />
        </Box>
      </Stack>
    </MPaper>
  );
};

export default StatisticData;
