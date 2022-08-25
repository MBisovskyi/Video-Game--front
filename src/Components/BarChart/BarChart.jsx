import "./BarChart.css";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const BarChart = ({ videoGames }) => {
  let gamesSince2013 = videoGames.filter((game) => game.year >= 2013);

  let allPlatforms = gamesSince2013.map((platform) => platform.platform);

  let distinctPlatforms = [...new Set(allPlatforms)];

  let platformsData = distinctPlatforms.map((platform) => {
    let platformsArrayGame = gamesSince2013.filter(
      (game) => game.platform === platform
    );
    let platformSumSales = 0;
    for (let i = 0; i < platformsArrayGame.length; i++) {
      platformSumSales += platformsArrayGame[i].globalsales;
    }
    return [platform, platformSumSales, "green"];
  });

  const data = [
    ["Console", "Sold (millions)", { role: "style" }],
    ...platformsData,
  ];

  //   [
  //     "PC", pcSales, "fill-color: #99AEBB;" + "stroke-width: 1;" + "stroke-color: #3D82A1",
  //   ]

  const options = {
    title:
      "Best console to invest in based on video game copies sold since 2013",
    titleTextStyle: { color: "#3D82A1", fontSize: "22" },
    chartArea: { width: "50%" },
    hAxis: {
      title: "Video Game Copies Sold (millions)",
      titleTextStyle: { color: "#3D82A1" },
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
