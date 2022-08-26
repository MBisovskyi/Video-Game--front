import { useState } from "react";
import "./SearchGame.css";

const SearchGame = (props) => {
  const [input, setInput] = useState("");

  async function submitHandle() {
    props.findGame(input);
    setInput("");
  }

  return (
    <div className="searchgame-wrap">
      <label>Search Game</label>
      <form>
        <input
          className="searchgame-input-field"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
      </form>
      <button onClick={submitHandle} type="submit">
        Find
      </button>
    </div>
  );
};

export default SearchGame;
