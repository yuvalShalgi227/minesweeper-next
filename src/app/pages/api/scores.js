import dbConnect from "../../utils/dbConnect";
import Score from "../../models/Score";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const scores = await Score.find({}).sort({
          score: -1,
        }); /* find all the data in our database, sort by score descending */
        res.status(200).json({ success: true, data: scores });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
