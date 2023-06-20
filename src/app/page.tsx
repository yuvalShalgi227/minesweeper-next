import { Game } from "@/app/components/Game";
import "./page.scss";
import Scoreboard from "@/pages/scoreboard";
export default function Home() {
  let magicNumber = 0;

  return (
    <main className={"main"}>
      <div className="game-title">
        <h1>Minesweeper</h1>
      </div>

      <div className="game-wrapper">
        <Game />
      </div>
      <Scoreboard />
    </main>
  );
}
