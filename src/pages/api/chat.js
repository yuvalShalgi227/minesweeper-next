import axios from "axios";
import nextConnect from "next-connect";

const handler = nextConnect();

handler.use(express.json());

handler.post(async (req, res) => {
  try {
    const response = await axios.post("http://54.167.14.4/chat", req.body, {
      headers: req.headers,
    });
    res.status(200).json(response.data);
  } catch (error) {
    let errorMessage = error.toString();
    let errorDetails = {};

    // Check if error.response exists to avoid potential TypeErrors
    if (error.response) {
      errorMessage = `Response error: ${error.response.status} - ${error.response.statusText}`;
      errorDetails = {
        data: error.response.data, // Additional information from the backend
        headers: error.response.headers, // Headers returned from the backend
      };
    }

    res.status(500).json({
      error: errorMessage,
      request: {
        headers: req.headers,
        body: req.body,
      },
      response: errorDetails,
    });
  }
});

export default handler;
