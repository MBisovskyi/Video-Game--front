import "./GamePlatformsPieChart.css";
import React from "react";
import { Chart } from "react-google-charts";

const GamePlatformsBarChart = (props) => {
  let filteredGames = props.videoGames.filter(
    (game) => game.name === props.gameName
  );

  let gamesPlatforms = filteredGames.map((game) => {
    return [game.platform, game.globalsales];
  });
  console.log(gamesPlatforms);

  const data = [["Platform", "Copies Sold"], ...gamesPlatforms];

  const options = {
    title: "Game copies (millions) sold by game platform",
    titleTextStyle: { color: "rgb(239, 151, 44)", fontSize: "26" },
    pieHole: 0.5,
    is3D: false,
    legendTextStyle: { color: "#FFF", fontSize: "16" },
    chartArea: { width: "100%" },
    backgroundColor: "transparent",
  };

  return (
    <div className="piechart-container">
      <div className="gameplatformsbarchart-wrap">
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default GamePlatformsBarChart;
