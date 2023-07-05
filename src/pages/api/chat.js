import axios from "axios";
import nextCors from "nextjs-cors";

export default async (req, res) => {
  // Run the cors middleware
  await nextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*", // You can change this to restrict to certain domains
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

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
