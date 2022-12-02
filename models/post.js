const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  comments: { type: Array, default: [] },
  published: { type: Boolean },
  timestamp: { type: Date },
  imgUrl: { type: String, required: true },
  likes: { type: String, required: true },
});

module.exports = mongoose.model("Post", PostSchema);
