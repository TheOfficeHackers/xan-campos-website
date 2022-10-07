const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roles = require("../data/roles.json");

const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const workSchema = new Schema({
  title: {
    type: String,
  },
  mainArtist: {
    type: String,
  },
  project: {
    type: String,
  },
  musicians: {
    type: [String],
  },
  release: {
    type: Date,
  },
  cover: {
    type: String,
    validate: {
      validator: isURL,
      message: "URL is not valid",
    },
  },
  trackList: {
    type: [String],
  },
  genre: {
    type: String
  },
  recordLabel: {
    type: String
  },
});

const Work = mongoose.model("Work", workSchema);
module.exports = Work;
