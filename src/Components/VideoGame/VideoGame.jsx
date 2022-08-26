import { useEffect, useState } from "react";
import "./VideoGame.css";

const VideoGame = (props) => {
  const [filteredGame, setFilteredGame] = useState([]);

  useEffect(() => {
    async function filterGame(searchInput) {
      let gameFound = props.videoGames.filter(
        (game) => game.name === searchInput
      );
      return gameFound;
    }
    setFilteredGame(filterGame(props.findGame));
  }, []);

  return <div className="filteredgame-wrap">Halo 3</div>;
};

export default VideoGame;
