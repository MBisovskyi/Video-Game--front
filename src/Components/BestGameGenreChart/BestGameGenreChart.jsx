import "./BestGameGenreChart.css";
import { Chart } from "react-google-charts";

const BestGameGenreChart = ({ videoGames }) => {
  let gamesSince2010 = videoGames.filter((game) => game.year >= 2010);

  let allGamesGenre = gamesSince2010.map((game) => game.genre);

  let distinctGenresArray = [...new Set(allGamesGenre)];

  let gamesGenreData = distinctGenresArray.map((genre) => {
    let genresArray = gamesSince2010.filter((game) => game.genre === genre);
    let genreGlobalSales = 0;
    for (let i = 0; i < genresArray.length; i++) {
      genreGlobalSales += genresArray[i].globalsales;
    }
    return [genre, genreGlobalSales];
  });

  const data = [["Console", "Sold (millions)"], ...gamesGenreData];

  const options = {
    title: "Best video game genre based on video game copies sold since 2013",
    pieHole: 0.6,
    is3D: false,
    titleTextStyle: { color: "#3D82A1", fontSize: "22" },
    chartArea: { width: "100%" },
    hAxis: {
      title: "Video Game Copies Sold (millions)",
      titleTextStyle: { color: "#3D82A1" },
    },
    backgroundColor: "transparent",
    // colors: ["#3D82A1", "#002741"],
  };

  return (
    <div className="genre-container">
      <div className="bestgamegenrechart-wrap">
        <p className="genre-text">Genre</p>
        <Chart
          chartType="PieChart"
          width="100%"
          height="500px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default BestGameGenreChart;
