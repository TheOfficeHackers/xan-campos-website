const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const sidemanSchema = new Schema({
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
},
{
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      delete ret.__v;
      ret.id = ret._id;
      delete ret._id;

      return ret;
    },
  },
}
);

const Sideman = mongoose.model("Sideman", sidemanSchema);
module.exports = Sideman;
