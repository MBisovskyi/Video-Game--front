import "./BarChart.css";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const BarChart = (props) => {
  const [wiiSales, setWiiSales] = useState(0);
  const [wiiUSales, setWiiUSales] = useState(0);
  const [threeDsSales, setThreeDsSales] = useState(0);
  const [xOneSales, setXOneSales] = useState(0);
  const [x360Sales, setX360Sales] = useState(0);
  const [psThreeSales, setPsThreeSales] = useState(0);
  const [psFourSales, setPsFourSales] = useState(0);
  const [pcSales, setPcSales] = useState(0);

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
    ["Console", "Sold (millions)", { role: "style" }],
    [
      "Wii",
      wiiSales,
      "fill-color: #3D82A1;" + "stroke-width: 2;" + "stroke-color: #99AEBB",
    ],
    [
      "WiiU",
      wiiUSales,
      "fill-color: #99AEBB;" + "stroke-width: 1;" + "stroke-color: #3D82A1",
    ],
    [
      "3DS",
      threeDsSales,
      "fill-color: #3D82A1;" + "stroke-width: 2;" + "stroke-color: #99AEBB",
    ],
    [
      "XOne",
      xOneSales,
      "fill-color: #99AEBB;" + "stroke-width: 1;" + "stroke-color: #3D82A1",
    ],
    [
      "X360",
      x360Sales,
      "fill-color: #3D82A1;" + "stroke-width: 2;" + "stroke-color: #99AEBB",
    ],
    [
      "PS3",
      psThreeSales,
      "fill-color: #99AEBB;" + "stroke-width: 1;" + "stroke-color: #3D82A1",
    ],
    [
      "PS4",
      psFourSales,
      "fill-color: #3D82A1;" + "stroke-width: 2;" + "stroke-color: #99AEBB",
    ],
    [
      "PC",
      pcSales,
      "fill-color: #99AEBB;" + "stroke-width: 1;" + "stroke-color: #3D82A1",
    ],
  ];

  const options = {
    title:
      "Best console to invest in based on video game copies sold since 2013",
    titleTextStyle: { color: "#3D82A1", fontSize: "22" },
    chartArea: { width: "50%" },
    hAxis: {
      title: "Video Game Copies Sold (millions)",
      titleTextStyle: { color: "#3D82A1" },
      minValue: 0,
    },
    backgroundColor: "transparent",
    colors: ["#3D82A1"],
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
