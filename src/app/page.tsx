import Image from "next/image";
//import styles from './page.scss'
import { Game } from "@/app/components/Game";
import "./page.scss";
import Scoreboard from "@/pages/scoreboard";
export default function Home() {
  return (
    <main className={"main"}>
      <div className="game-title">
        <h1>Minesweeper</h1>
      </div>
      <Scoreboard />
      <div className="game-wrapper">
        <Game />
      </div>
    </main>
  );
}
