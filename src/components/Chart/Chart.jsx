import React, { useState, useEffect } from "react";
import "./Chart.css";
import Chart from "react-google-charts";

export default function ChartDisplay({ chartData }) {
  const [displayChart, setDisplayChart] = useState([["Date", "Price"]]);

  useEffect(() => {
    if (chartData.prices) {
      let displayChartCopy = [["Date", "Price"]];
      chartData.prices.map((item) => {
        displayChartCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
        console.log(item[1]);
      });
      setDisplayChart(displayChartCopy);
    }
  }, [chartData]);
  console.log(displayChart);
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
