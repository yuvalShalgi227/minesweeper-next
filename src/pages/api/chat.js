import axios from "axios";

export default async (req, res) => {
  // Manually set the CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-password");

  const headersToForward = {
    "x-password": req.headers["x-password"],
    "Content-Type": req.headers["content-type"],
  };

  if (req.method === "POST") {
    try {
      const response = await axios.post("http://54.167.14.4/chat", req.body, {
        headers: headersToForward,
      });
      res.status(200).json(response.data);
    } catch (error) {
      // existing error handling code...
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
