"use client";
import useSWR, { mutate } from "swr";
import { fetcher } from "src/utils/fetcher";
import { useEffect } from "react";

export default function Scoreboard({ score }) {
  useEffect(() => {
    mutate("/api/scores");
  }, [score]);
  const { data, error } = useSWR("/api/scores", fetcher);

  if (error) return <div>error: {JSON.stringify(error)}</div>;
  if (!data) return <div>Loading...</div>;

  // render data
  const doretedData = data.data.sort((a, b) => b.score - a.score);
  const showData = () =>
    //retrun top 3 scores

    doretedData.map((item, index) => {
      if (index < 3) {
        return (
          <li key={index}>
            <span>{item.name}:</span>

            <span>{item.score}</span>
          </li>
        );
      }
    });
  return (
    <div className="score-wrapper">
      <h2>Scoreboard</h2>
      <ul>{showData()}</ul>
    </div>
  );
}
