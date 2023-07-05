import axios from "axios";

// You might need to install axios using: npm install axios
export default async (req, res) => {
  if (req.method === "POST") {
    try {
      const response = await axios.post("http://54.167.14.4/chat", req.body);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
