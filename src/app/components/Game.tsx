"use client"; // This is a client component
import { UseGame } from "../hooks/UseGame";
import "../App.scss";
import { Board } from "./Board";
import Header from "./Header";
export const Game = () => {
  const {
    grid,
    gameOver,
    handleClick,
    didWin,
    resetGame,
    revealedCells,
    startTime,
  } = UseGame();
  const endGameMessage = didWin ? "You Win!" : "Game Over";

  return (
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
  );
};
