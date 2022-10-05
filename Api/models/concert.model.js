const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const isValidHour = (hour) => {
  try {
    moment(hour, 'HH:mm', true).isValid()
    return true;
  } catch (error) {
    return false;
  }
};

const concertSchema = new Schema(
  {
    fecha: {
      type: Date,
      required: true,
    },
    hour: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: isValidHour,
        message: "Hour is not valid",
      },
    },
    band: {
      type: String,
      required: true,
      trim: true,
      maxLength: [100, "Band's name is too long"]
    },
    venue: {
      type: String,
      required: true,
      trim: true,
      maxLength: [150, "Venue's name is too long"]
    },
    country: {
      type: String,
      trim: true,
      maxLength: [35, "Country's name is too long"]
    },
    event: {
      type: String,
      trim: true,
      maxLength: [150, "Event's name is too long"]
    }

  }, 
  { 
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        return ret;
      },
    }, 
  }
);

const Concert = mongoose.model("Concert", concertSchema);
module.exports = Concert;