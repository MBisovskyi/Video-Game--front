import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import BarChart from "./Components/BarChart/BarChart";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <BarChart videoGames={videoGames} />
      <Footer />
    </div>
  );
}

export default App;
