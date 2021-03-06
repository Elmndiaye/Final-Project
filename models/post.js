const mongoose = require(“mongoose”);
const Schema = mongoose.Schema;

const postSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   address: { type: String, required: true },
   phone: { type: Number, required: true },
});

const Post = mongoose.model(“Post”, postSchema);

module.exports = Post;