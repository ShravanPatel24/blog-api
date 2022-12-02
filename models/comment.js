const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  username: { type: String, required: true, maxLength: 40 },
  content: { type: String, required: true },
  postId: { type: String, required: true },
  timestamp: { type: Date },
});

module.exports = mongoose.model("Comment", CommentsSchema);
