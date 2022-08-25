import "./BestGameGenreChart.css";
import { Chart } from "react-google-charts";

const BestGameGenreChart = ({ videoGames }) => {
  let gamesSince2010 = videoGames.filter((game) => game.year >= 2010);
  console.log("Games since 2010 ", gamesSince2010);

  let allGamesGenre = gamesSince2010.map((game) => game.genre);
  console.log("Genres ", allGamesGenre);

  let distinctGenresArray = [...new Set(allGamesGenre)];
  console.log("Distinct Genres ", distinctGenresArray);

  let gamesGenreData = distinctGenresArray.map((genre) => {
    let genresArray = gamesSince2010.filter((game) => game.genre === genre);
    let genreGlobalSales = 0;
    for (let i = 0; i < genresArray.length; i++) {
      genreGlobalSales += genresArray[i].globalsales;
    }
    return [genre, genreGlobalSales, "#3D82A1"];
  });

  const data = [
    ["Console", "Sold (millions)", { role: "style" }],
    ...gamesGenreData,
  ];

  const options = {
    title: "Best video game genre based on video game copies sold since 2013",
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
    <div className="bestgamegenrechart-wrap">
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BestGameGenreChart;
