const mongoose = require("mongoose");
const { Schema } = mongoose;

const scoreSchema = new Schema({
  name: String,
  score: Number,
});

mongoose.model("scores", scoreSchema);
