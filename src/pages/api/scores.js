import dbConnect from "src/utils/dbConnect";
import Score from "src/models/Score";

export default async (req, res) => {
  const { method } = req;
  await dbConnect();
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
    case "POST":
      try {
        const score = await Score.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: score });
      } catch (error) {
        console.log("!!!!!!!!!!!");
        console.log(error);
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false });
      break;
  }
};
