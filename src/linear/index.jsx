import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import styles from "./linear.module.scss";
import cn from "classnames";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
export default function Linear({
  size = "medium",
  utdData = [1, 2, 1, 7, 4, 5, 6, 2, 6, 3, 2, 6, 5],
  cityData = [3, 1, 2, 1, 2, 4, 3, 1, 1, 2, 1, 1, 2],
}) {
  const mainCn = cn(styles[size]);
  const [data, setData] = useState({
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    datasets: [
      {
        label: "Manchester United",
        data: utdData,
        backgroundColor: "rgb(189, 38, 38)",
        borderColor: "rgb(189, 38, 38)",
        tension: 0.4,
        fill: false,
      },
      {
        label: "Manchester City",
        data: cityData,
        backgroundColor: "rgb(53, 191, 255)",
        borderColor: "rgb(53, 191, 255)",
        tension: 0.4,
        fill: false,
      },
    ],
  });
  return (
    <div className={mainCn}>
      <Line reverse={true} data={data}></Line>
    </div>
  );
}
