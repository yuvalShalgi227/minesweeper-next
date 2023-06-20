import axios from "axios";

export async function postScore(name, score) {
  try {
    const response = await axios.post("/api/scores", { name, score });
    return response.data;
  } catch (error) {
    console.error("Error posting score", error);
    return null;
  }
}
