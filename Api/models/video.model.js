const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roles = require("../data/roles.json")

const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const videoSchema = new Schema({
  title: {
    type: String,
  },
  band: {
    type: String,
  },
  role: {
    type: [
      {
        type: String,
        enum: roles,
      },
    ],
  },
  url: {
    type: String,
    unique: true,
    validate: {
      validator: isURL,
      message: "URL is not valid",
    },
  },
});

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
