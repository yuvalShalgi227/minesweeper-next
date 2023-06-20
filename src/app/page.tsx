import Image from "next/image";
//import styles from './page.scss'
import { Game } from "@/app/components/Game";
import "./page.scss";
export default function Home() {
  return (
    <main className={"main"}>
      <div className="game-title">
        <h1>Minesweeper</h1>
      </div>
      <div className="game-wrapper">
        <Game />
      </div>
    </main>
  );
}
