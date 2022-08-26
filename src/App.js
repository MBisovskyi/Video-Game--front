import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import BestPlatformChart from "./Components/BestPlatformChart/BestPlatformChart";
import { useState, useEffect } from "react";
import axios from "axios";
import BestGameGenreChart from "./Components/BestGameGenreChart/BestGameGenreChart";
import VideoGame from "./Components/VideoGame/VideoGame";

function App() {
  const [videoGames, setVideoGames] = useState([]);

  useEffect(() => {
    async function getAllVideoGames() {
      let response = await axios.get("http://localhost:8080/all");
      setVideoGames(response.data);
    }
    getAllVideoGames();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="app-content-wrap">
        <div className="content-charts">
          <BestPlatformChart videoGames={videoGames} />
          <BestGameGenreChart videoGames={videoGames} />
        </div>
      </div>
      <div>
        <VideoGame videoGames={videoGames} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
