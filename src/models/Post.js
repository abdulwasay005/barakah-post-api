const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A post title is required"],
      trim: true,
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    content: {
      type: String,
      required: [true, "Post content is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "An author name is required"],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);