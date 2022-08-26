import { useEffect, useState } from "react";
import "./SearchGame.css";

const SearchGame = (props) => {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {}, []);

  async function gameDetails() {
    let gameFound = props.videoGames.filter(
      (game) =>
        game.name.toLowerCase().includes(input.toLowerCase()) ||
        game.name.toLowerCase() === input.toLowerCase()
    );
    gameFound[0] ? setInput("") : setInput("Not found");
    props.setSingleGame(gameFound);
  }

  return (
    <div className="searchgame-wrap">
      <h2>Search Game</h2>
      <form>
        <input
          className="searchgame-input-field"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
      </form>
      <button onClick={gameDetails} type="submit">
        Find
      </button>
    </div>
  );
};

export default SearchGame;
