import "./BarChart.css";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const BarChart = (props) => {
  const [wiiSales, setWiiSales] = useState(1);
  const [wiiUSales, setWiiUSales] = useState(1);
  const [threeDsSales, setThreeDsSales] = useState(1);
  const [xOneSales, setXOneSales] = useState(1);
  const [x360Sales, setX360Sales] = useState(1);
  const [psThreeSales, setPsThreeSales] = useState(1);
  const [psFourSales, setPsFourSales] = useState(1);
  const [pcSales, setPcSales] = useState(1);

  useEffect(() => {
    getBestConsolesData();
  }, []);

  async function getBestConsolesData() {
    let response = await axios.get("http://localhost:8080/getBestConsole");
    setWiiSales(response.data[0]);
    setWiiUSales(response.data[1]);
    setThreeDsSales(response.data[2]);
    setXOneSales(response.data[3]);
    setX360Sales(response.data[4]);
    setPsThreeSales(response.data[5]);
    setPsFourSales(response.data[6]);
    setPcSales(response.data[7]);
    console.log(response.data);
  }

  const data = [
    ["Console", "Sold (millions)"],
    ["Wii", wiiSales],
    ["WiiU", wiiUSales],
    ["3DS", threeDsSales],
    ["XOne", xOneSales],
    ["X360", x360Sales],
    ["PS3", psThreeSales],
    ["PS4", psFourSales],
    ["PC", pcSales],
  ];

  const options = {
    title:
      "Best console to invest in based on video game copies sold since 2013",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Video Game Copies Sold (millions)",
      minValue: 0,
    },
  };
  return (
    <div className="barchart-wrap">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BarChart;
