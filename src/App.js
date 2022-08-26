import "./App.css";
import Bg from "./assets/bg.png";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import BestPlatformChart from "./Components/BestPlatformChart/BestPlatformChart";
import { useState, useEffect } from "react";
import axios from "axios";
import BestGameGenreChart from "./Components/BestGameGenreChart/BestGameGenreChart";

function App() {
  const [videoGames, setVideoGames] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const [singleGame, setSingleGame] = useState([]);

  useEffect(() => {
    getAllVideoGames();
  }, []);

  useEffect(() => {
    gameDetails();
  }, [searchInput]);

  async function getAllVideoGames() {
    let response = await axios.get("http://localhost:8080/all");
    setVideoGames(response.data);
  }

  async function gameDetails() {
    let gameFound = videoGames.filter(
      (game) => game.name.includes(searchInput) || game.name === searchInput
    );
    setSingleGame(gameFound);
  }

  return !singleGame[0] ? (
    <div className="App">
      <img src={Bg} alt="background" />
      <NavBar findGame={setSearchInput} />
      <div className="app-content-wrap">
        <div className="content-charts">
          <BestPlatformChart videoGames={videoGames} />
          <BestGameGenreChart videoGames={videoGames} />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="App">
      <img src={Bg} alt="background" />
      <NavBar findGame={setSearchInput} />
      <div className="app-content-wrap">
        <div className="gamedetails-wrap">
          <h2>{singleGame[0].name}</h2>
          <h3>
            Rank: <span>{singleGame[0].game_rank}</span>
          </h3>

          <h3>
            Year: <span>{singleGame[0].year}</span>
          </h3>
          <h3>
            Platform: <span>{singleGame[0].platform}</span>
          </h3>
          <h3>
            Genre: <span>{singleGame[0].genre}</span>
          </h3>
          <h3>
            Publisher: <span>{singleGame[0].publisher}</span>
          </h3>
          <h3>
            Northamerica Sales:{" "}
            <span>{singleGame[0].northamericasales} millions</span>
          </h3>
          <h3>
            Europa Sales: <span>{singleGame[0].europesales} millions</span>
          </h3>
          <h3>
            Japan Sales: <span>{singleGame[0].japansales} millions</span>
          </h3>
          <h3>
            Other Sales: <span>{singleGame[0].othersales} millions</span>
          </h3>
          <h3>
            Total Sales: <span>{singleGame[0].globalsales} millions</span>
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
