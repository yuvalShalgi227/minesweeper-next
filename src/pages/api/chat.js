import axios from "axios";
import nextCors from "nextjs-cors";
// Options

export default async (req, res) => {
  // existing CORS code...

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
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version"
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

      let errorDetails = {
        message: error.message,
      };

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);

        errorDetails = {
          ...errorDetails,
          responseData: error.response.data,
          responseStatus: error.response.status,
          responseHeaders: error.response.headers,
        };
      } else if (error.request) {
        console.error("Request data:", error.request);

        errorDetails = {
          ...errorDetails,
          requestData: error.request,
        };
      }

      res
        .status(500)
        .json({ error: "Error forwarding request", details: errorDetails });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
