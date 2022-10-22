const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sidemanSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: [150, "Title is too long"]
  },
  mainArtist: {
    type: String,
    required: true,
    trim: true,
    maxLength: [75, "Main artist's name is too long"]
  },
  project: {
    type: String,
    trim: true,
    maxLength: [150, "Project's name is too long"]
  },
  musicians: {
    type: [String],
  },
  releaseYear: {
    type: String,
    required: true,
    trim: true,
    maxLength: [4, "Release year is too long"]
  },
  cover: {
    type: String,
    required: true,
    trim: true,
  },
  recordLabel: {
    type: String,
    required: true,
    trim: true,
    maxLength: [50, "Record label name is too long"]
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
