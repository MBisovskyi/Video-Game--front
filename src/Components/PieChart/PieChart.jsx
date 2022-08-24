import "./PieChart.css";
import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PieChart = (props) => {
  const [wiiSales, setWiiSales] = useState(1);
  const [nesSales, setNesSales] = useState(1);
  const [gbSales, setGbSales] = useState(1);
  const [dsSales, setDsSales] = useState(1);
  const [x360Sales, setX360Sales] = useState(1);
  const [psThreeSales, setPsThreeSales] = useState(1);
  const [psFourSales, setPsFourSales] = useState(1);

  const data = [
    ["Console", "totalSales"],
    ["Wii", wiiSales],
    ["NES", nesSales],
    ["GB", gbSales],
    ["DS", dsSales],
    ["X360", x360Sales],
    ["PS3", psThreeSales],
    ["PS4", psFourSales],
  ];

  const options = {
    title: "The best console to invest. Game copies sold since 2013!",
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
