import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters"],
  },
  score: {
    type: Number,
    required: [true, "Please add a score"],
  },
});

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);
