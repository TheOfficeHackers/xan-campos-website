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

const colaboSchema = new Schema({
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
  releaseYear: {
    type: String,
  },
  cover: {
    type: String,
    validate: {
      validator: isURL,
      message: "URL is not valid",
    },
  },
  recordLabel: {
    type: String
  },
});

const Colabo = mongoose.model("Colabo", colaboSchema);
module.exports = Colabo;
