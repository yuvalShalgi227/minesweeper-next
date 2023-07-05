import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        "http://100.88.5.106:8000/chat",
        req.body,
        {
          headers: req.headers,
        }
      );
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
