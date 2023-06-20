"use client"; // This is a client component
import { UseGame } from "../hooks/UseGame";
import "../App.scss";
import { Board } from "./Board";
import Header from "./Header";
import EndGame from "@/app/components/EndGame";
import Scoreboard from "@/pages/scoreboard";
export const Game = () => {
  const {
    grid,
    gameOver,
    handleClick,
    didWin,
    resetGame,
    revealedCells,
    startTime,
    score,
  } = UseGame();
  const endGameMessage = didWin ? `You Win! with ${score}` : "Game Over";

  let stam = 0;
  const scoreSumbit = () => {
    //todo remove this
    stam++;
  };

  return (
    <div id="game-wrapper" className="mines-game-wrapper">
      {gameOver ? (
        <div>
          <EndGame scoreSumbit={scoreSumbit} score={score} />
        </div>
      ) : null}
      <div className="mines-game">
        {gameOver ? <div>{endGameMessage}</div> : null}
        <Header
          resetGame={resetGame}
          mineCount={revealedCells}
          startTime={startTime}
          gameOver={gameOver}
          didWin={didWin}
        />
        <Board handleClick={handleClick} grid={grid} didWin={didWin} />
      </div>
      <Scoreboard score={score} />
    </div>
  );
};
