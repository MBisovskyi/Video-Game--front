import "./VideoGame.css";

const VideoGame = ({ singleGame }) => {
  return (
    <div className="gamedetails-wrap">
      <h2 className="gamedetails-name">
        <span>{singleGame[0].name}</span>
      </h2>
      <div className="gamedetails-container">
        <div className="gamedetails-left-container">
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
        </div>
        <div className="gamedetails-right-container">
          <h3>
            Northamerica Sales: <span>{singleGame[0].northamericasales} m</span>
          </h3>
          <h3>
            Europa Sales: <span>{singleGame[0].europesales} m</span>
          </h3>
          <h3>
            Japan Sales: <span>{singleGame[0].japansales} m</span>
          </h3>
          <h3>
            Other Sales: <span>{singleGame[0].othersales} m</span>
          </h3>
          <h3>
            Total Sales: <span>{singleGame[0].globalsales} m</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoGame;
