import React from "react";
import "./Chart.css";
import { useState, useEffect } from "react";
import Chart from "react-google-charts";

export default function ChartDisplay({ chartData }) {
  const [displayChart, setDisplayChart] = useState([["Date", "Price"]]);

  useEffect(() => {
    const chartDataCopy = [["Date", "Price"]];
    if (chartData.prices) {
      chartData.prices.map((item) => {
        chartDataCopy.push([
          `${new Date(item[0]).toLocaleString().slice(0, -16)}`,
          item[1],
        ]);
      });
      setDisplayChart(chartDataCopy);
    }
  }, [chartData]);
  return (
    <div className="chart">
      <Chart
        chartType="LineChart"
        data={displayChart}
        height="100%"
        width="100%"
        legendToggle
      />
    </div>
  );
}
