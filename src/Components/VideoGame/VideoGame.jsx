import "./VideoGame.css";

const VideoGame = ({ videoGames }) => {
  return (
    <div className="videogame-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Platform</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {videoGames.map((game, index) => {
            return (
              <tr key={index}>
                <td>{game.name}</td>
                <td>{game.platform}</td>
                <td>{game.year}</td>
                <td>{game.genre}</td>
                <td>{game.publisher}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VideoGame;
