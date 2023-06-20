"use client";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export default function Scoreboard() {
  const { data, error } = useSWR("/api/scores", fetcher);

  if (error) return <div>error: {JSON.stringify(error)}</div>;
  if (!data) return <div>Loading...</div>;

  // render data
  return (
    <div>
      <h1>Scoreboard</h1>
      <ul>
        {data.data.map((item, index) => (
          <li key={index}>
            <span>{item.name}:</span>
            <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
