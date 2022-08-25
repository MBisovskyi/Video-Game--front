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
    chartArea: { width: "100%" },
    hAxis: {
      title: "Video Game Copies Sold (millions)",
      titleTextStyle: { color: "#3D82A1" },
    },
    backgroundColor: "transparent",
    colors: ["#3D82A1"],
  };

  return (
    <div className="platform-container">
      <div className="platform-chart-text-field">
        <p>
          Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur nulla justo, aliquet in iaculis non, pharetra in ipsum. Ut a
          ultricies tortor. Sed eu scelerisque elit. Aliquam erat volutpat.
          Etiam laoreet nec purus ut ornare. Quisque vitae maximus magna.
          Quisque sed tempus erat, tempus pretium elit. Suspendisse pretium,
          enim pharetra aliquet sollicitudin, elit nunc dapibus orci, et mollis
          tellus tortor a turpis. Pellentesque ut fringilla nibh. Aenean
          tincidunt non lorem et ullamcorper. Vivamus vel felis non sem
          tristique blandit eget at nulla. In dapibus dignissim sagittis. Donec
          vel sapien vitae nibh suscipit volutpat. Pellentesque sit amet eros
          pulvinar, elementum ex nec, posuere lorem. In hac habitasse platea
          dictumst. Maecenas pulvinar lobortis nibh sed dignissim. Aenean auctor
          quam a tempus consequat.
        </p>
      </div>
      <div className="bestplatformchart-wrap">
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default ColumnChart;
