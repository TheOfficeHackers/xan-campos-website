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


const easterEggSchema = new Schema({
  name: {
    type: String,
    trim: true,
    maxLength: [40, "Name is too long"]
  },
  link: {
    type: String,
    trim: true,
    validate: {
      validator: isURL,
      message: "URL is not valid",
    },
  },
  pic: {
    type: String,
    trim: true,
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

const EasterEgg = mongoose.model("EasterEgg", easterEggSchema);
module.exports = EasterEgg;