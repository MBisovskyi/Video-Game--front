import "./BestPlatformChart.css";
import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const ColumnChart = ({ videoGames }) => {
  let gamesSince2013 = videoGames.filter((game) => game.year >= 2013);

  let allPlatforms = gamesSince2013.map((platform) => platform.platform);

  let distinctPlatforms = [...new Set(allPlatforms)];

  let platformsData = distinctPlatforms.map((platform) => {
    let platformsArrayGame = gamesSince2013.filter(
      (game) => game.platform === platform
    );
    let platformGlobalSales = 0;
    for (let i = 0; i < platformsArrayGame.length; i++) {
      platformGlobalSales += platformsArrayGame[i].globalsales;
    }
    return [platform, platformGlobalSales, "#3D82A1"];
  });

  const data = [
    ["Console", "Sold (millions)", { role: "style" }],
    ...platformsData,
  ];

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
    <div className="bestplatformchart-wrap">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default ColumnChart;
