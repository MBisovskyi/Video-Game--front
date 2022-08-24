import "./PieChart.css";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PieChart = (props) => {
  const [totalSales, setTotalSales] = useState(0);

  const data = [
    ["Console", "Total Sales"],
    ["PS3", 11],
    ["PS4", 2],
    ["PC", 2],
    ["XBox", 7],
  ];

  const options = {
    title: "FIFA 16 game copies sold filtered by console",
    backgroundColor: "#c8e0cd",
  };

  return (
    <div className="piechart-wrap">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
      />
    </div>
  );
};

export default PieChart;
