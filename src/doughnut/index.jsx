import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import cn from 'classnames'

import styles from "./doughnut.module.scss"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

export default function DoughnutChart({ size='medium', datas=[17098250, 9879750, 9600013, 9831510,8515770,7741220]}) {
  const mainCn = cn(
    styles[size]
  )
  const [config, setConfig] = useState({});

  const [data, setData] = useState({
    datasets: [],
  });

  useEffect(() => {
    setData({
      labels: ["Russia", "Canada", "China", "USA","Brasil","Australia"],
      datasets: [
        {
          label: "My First Dataset",
          data: datas,
          backgroundColor: [
            "rgb(28, 164, 206)",
            "rgb(255, 102, 0)",
            "rgb(255, 0, 0)",
            "rgb(0, 36, 153)",
            "rgb(11, 100, 8)",
            "rgb(255, 196, 0)",
          ],
          hoverOffset: 4,
        },
      ],
    });
    setConfig({
      type: "doughnut",
      data: data,
    });
  }, []);

  return (
    <div className={mainCn}>
      <Doughnut options={config} data={data} />
    </div>
  );
}
