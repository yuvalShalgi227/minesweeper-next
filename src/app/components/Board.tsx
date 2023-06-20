import "../App.scss";

type cellType = {
  value: "mine" | number;
  isRevealed: boolean;
  isFlagged: boolean;
};
declare module "react" {
  interface CSSProperties {
    "--row"?: number;
    "--col"?: number;
  }
}

export const Board = ({
  handleClick,
  grid,
  didWin,
}: {
  handleClick: (owIndex: number, colIndex: number) => void;
  grid: cellType[][];
  didWin: boolean;
}) => {
  //const { grid, gameOver, handleClick, didWin } = UseGame();
  //  const endGameMessage = didWin ? "You Win!" : "Game Over";
  if (!grid) {
    return null;
  }
  const bomb = "💣";

  return (
    <div className="board">
      {grid.map((row: cellType[], rowIndex: number) => (
        <div className="row" key={rowIndex}>
          {row.map((cell: cellType, colIndex: number) => (
            <div
              className={`cell ${
                cell.isRevealed ? (cell.value === "mine" ? "mine" : "safe") : ""
              } ${didWin ? "win" : ""}`}
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
              style={{ "--row": rowIndex, "--col": colIndex }}
            >
              {cell.isRevealed
                ? cell.value === "mine"
                  ? bomb
                  : cell.value === 0
                  ? ""
                  : cell.value
                : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
