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

  const data = [["Genre", "Sold (millions)"], ...gamesGenreData];

  const options = {
    title:
      "Best video game genre based on video game\n copies (millions) sold since 2010",
    pieHole: 0.6,
    is3D: false,
    legendTextStyle: { color: "#FFF", fontSize: "16" },
    titleTextStyle: { color: "rgb(239, 151, 44)", fontSize: "22" },
    chartArea: { width: "85%" },
    backgroundColor: "transparent",
  };

  return (
    <div className="genre-container">
      <p className="genre-text">Genre</p>
      <Chart
        chartType="PieChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default BestGameGenreChart;
