import axios from "axios";

export default async (req, res) => {
  // Manually set the CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-password"
  );
  res.setHeader("Access-Control-Max-Age", "86400");

  const headersToForward = {
    "x-password": req.headers["x-password"],
    "Content-Type": req.headers["content-type"],
  };

  console.log("Headers to forward:", headersToForward);
  console.log("Body:", req.body);

  if (req.method === "POST") {
    try {
      const response = await axios.post("http://54.167.14.4/chat", req.body, {
        headers: headersToForward,
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.error("Error in Axios request:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Request data:", error.request);
      }
      res.status(500).json({ error: "Error forwarding request" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
