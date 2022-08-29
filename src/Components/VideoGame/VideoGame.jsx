import GamePlatformsPieChart from "../GamePlatformsPieChart/GamePlatfromsPieChart";
import "./VideoGame.css";

const VideoGame = (props) => {
  return (
    <div className="gamedetails-wrap">
      <h2 className="gamedetails-name">
        <span>{props.singleGame[0].name}</span>
      </h2>
      <div className="gamedetails-container">
        <div className="gamedetails-left-container">
          <h3>
            Rank: <span>{props.singleGame[0].game_rank}</span>
          </h3>

          <h3>
            Year: <span>{props.singleGame[0].year}</span>
          </h3>
          <h3>
            Genre: <span>{props.singleGame[0].genre}</span>
          </h3>
          <h3>
            Publisher: <span>{props.singleGame[0].publisher}</span>
          </h3>
        </div>
        <div className="gamedetails-right-container">
          <h3>
            Northamerica Sales:{" "}
            <span>{props.singleGame[0].northamericasales} m</span>
          </h3>
          <h3>
            Europa Sales: <span>{props.singleGame[0].europesales} m</span>
          </h3>
          <h3>
            Japan Sales: <span>{props.singleGame[0].japansales} m</span>
          </h3>
          <h3>
            Total Sales: <span>{props.singleGame[0].globalsales} m</span>
          </h3>
        </div>
      </div>
      <GamePlatformsPieChart
        videoGames={props.videoGames}
        gameName={props.singleGame[0].name}
      />
    </div>
  );
};

export default VideoGame;
