import useSWR from "swr";

async function fetcher(url) {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
}

export default function Scoreboard() {
  const { data, error } = useSWR("/api/scores", fetcher);

  if (error) return <div>Your error message here</div>;
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
