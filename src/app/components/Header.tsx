import { useEffect, useState } from "react";
import "../App.scss";
type HeaderProps = {
  resetGame: () => void;
  mineCount: number;
  startTime: number;
  gameOver: boolean;
  didWin: boolean;
};

const Header: React.FC<HeaderProps> = ({
  resetGame,
  mineCount,
  gameOver,
  startTime,
  didWin,
}: {
  resetGame: () => void;
  mineCount: number;
  startTime: number;
  gameOver: boolean;
  didWin: boolean;
}) => {
  const didLose = gameOver && !didWin;
  const showPlay = "🙂";
  const showLose = "😵";
  const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameOver, startTime]);
  return (
    <div className="header">
      <div className="header-inner mine-counter">
        {/* Show the number of mines remaining */}
        {mineCount}
      </div>
      <div className="header-inner reset-button" onClick={resetGame}>
        {didLose ? showLose : showPlay}
      </div>
      <div className="header-inner timer">
        {/* Show the elapsed time */}
        {elapsedTime > 999 ? 999 : elapsedTime}
      </div>
    </div>
  );
};

export default Header;
